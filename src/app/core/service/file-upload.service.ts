import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileUpload } from '../models';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    // Truyền path vào để chọn folder lưu file, nếu không truyền thì sẽ gọi basePath làm mặc định
    private basePath = '/uploads';
    // coursePath = '/Course'; | Course theo từng chuyên ngành thì truyền /Course/CN1 hoặc /Course/CN2,...
    // blogPath = '/Blog';
    // bannerPath = '/Banner';
    // quizPath = '/Quiz';
    // logoPath = '/Logo';
    // promotionPath = '/Promotion';

    constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

    pushFileToStorage(fileName:string, path: string | undefined, fileUpload: FileUpload): Observable<{ downloadUrl: string, percentUpload: number }> {
        const filePath = `${path}/${fileName}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, fileUpload.file);
    
        return new Observable(observer => {
            uploadTask.snapshotChanges().pipe(
                finalize(() => {
                    storageRef.getDownloadURL().subscribe(downloadURL => {
                        fileUpload.url = downloadURL;
                        fileUpload.name = fileName;
                        fileUpload.path = filePath;
                        this.saveFileData(filePath, fileUpload);
                        observer.next({ downloadUrl: downloadURL, percentUpload: 100 });
                        observer.complete();
                    });
                })
            ).subscribe();
    
            uploadTask.percentageChanges().subscribe(percent => {
                observer.next({ downloadUrl: '', percentUpload: percent });
            });
    
            return () => uploadTask.cancel(); // Cancel upload if observer unsubscribes
        });
    }

    private saveFileData(path: string, fileUpload: FileUpload): void {
        this.db.list(path).push(fileUpload);
    }

    getFiles(numberItems: number): AngularFireList<FileUpload> {
        return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
    }

    deleteFile(path: string, fileUpload: FileUpload): void {
        try {
            this.deleteFileStorage(path, fileUpload.name);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    private deleteFileDatabase(path: string, key: string): Promise<void> {
        return this.db.list(path).remove(key);
    }

    private deleteFileStorage(path: string, name: string): void {
        const storageRef = this.storage.ref(path);
        storageRef.child(name).delete();
    }

    private handleError(error: any) {
        // Handle the error appropriately here
        return throwError(() => new Error(error));
    }
}
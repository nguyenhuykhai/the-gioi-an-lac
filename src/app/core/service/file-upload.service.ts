import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
// import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable, forkJoin, throwError } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileUpload } from '../models';

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

//     constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

//     pushFileToStorage(path: string | undefined, fileUpload: FileUpload): Observable<{ downloadUrl: string, percentUpload: number }> {
//         let configPath = this.basePath;
//         if (path !== undefined) {
//             configPath = path;
//         }
//         const filePath = `${configPath}/${fileUpload.file.name}`;
//         const storageRef = this.storage.ref(filePath);
//         const uploadTask = this.storage.upload(filePath, fileUpload.file);
    
//         return new Observable(observer => {
//             uploadTask.snapshotChanges().pipe(
//                 finalize(() => {
//                     storageRef.getDownloadURL().subscribe(downloadURL => {
//                         fileUpload.url = downloadURL;
//                         fileUpload.name = fileUpload.file.name;
//                         fileUpload.path = configPath;
//                         this.saveFileData(configPath, fileUpload);
//                         observer.next({ downloadUrl: downloadURL, percentUpload: 100 });
//                         observer.complete();
//                     });
//                 })
//             ).subscribe();
    
//             uploadTask.percentageChanges().subscribe(percent => {
//                 observer.next({ downloadUrl: '', percentUpload: percent });
//             });
    
//             return () => uploadTask.cancel(); // Cancel upload if observer unsubscribes
//         });
//     }

//     private saveFileData(path: string, fileUpload: FileUpload): void {
//         this.db.list(path).push(fileUpload);
//     }

//     getFiles(numberItems: number): AngularFireList<FileUpload> {
//         return this.db.list(this.basePath, ref =>
//             ref.limitToLast(numberItems));
//     }

//     deleteFile(fileUpload: FileUpload): void {
//         try {
//             this.deleteFileStorage(fileUpload.path, fileUpload.name);
//         } catch (error: any) {
//             this.handleError(error);
//         }
//     }

//     private deleteFileDatabase(path: string, key: string): Promise<void> {
//         return this.db.list(path).remove(key);
//     }

//     private deleteFileStorage(path: string, name: string): void {
//         const storageRef = this.storage.ref(path);
//         storageRef.child(name).delete();
//     }

//     private handleError(error: any) {
//         // Handle the error appropriately here
//         return throwError(() => new Error(error));
//     }
}
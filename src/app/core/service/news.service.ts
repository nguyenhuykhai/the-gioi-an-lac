import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from '../models';
@Injectable({ providedIn: 'root' })
export class NewsService {
    constructor(private httpClient: HttpClient) { }

    getAllNews() {
        return this.httpClient
            .get<any>(`${environment.baseUrl}/news`)
            .pipe(catchError(this.handleError));
    }

    getNewsById(id: string) {
        return this.httpClient
            .get<any>(`${environment.baseUrl}/news/${id}`)
            .pipe(catchError(this.handleError));
    }

    createNews(data: any) {
        return this.httpClient
            .post<any>(`${environment.baseUrl}/news`, data)
            .pipe(catchError(this.handleError));
    }

    updateNews(data: News) {
        return this.httpClient
            .put<any>(`${environment.baseUrl}/news/${data.id}`, data)
            .pipe(catchError(this.handleError));
    }

    deleteNews(id: string) {
        return this.httpClient
            .delete<any>(`${environment.baseUrl}/news/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        // Handle the error appropriately here
        return throwError(() => new Error(error));
    }
}

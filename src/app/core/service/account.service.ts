import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Account } from '../models';
@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private httpClient: HttpClient) { }

    getAllAccount() {
        return this.httpClient
            .get<any>(`${environment.baseUrl}/account`)
            .pipe(catchError(this.handleError));
    }

    getAccountById(id: string) {
        return this.httpClient
            .get<any>(`${environment.baseUrl}/api/account/${id}`)
            .pipe(catchError(this.handleError));
    }

    createAccount(data: any) {
        return this.httpClient
            .post<any>(`${environment.baseUrl}/api/account`, data)
            .pipe(catchError(this.handleError));
    }

    updateAccount(data: Account) {
        return this.httpClient
            .put<any>(`${environment.baseUrl}/api/account/${data.id}`, data)
            .pipe(catchError(this.handleError));
    }

    deleteAccount(id: string) {
        return this.httpClient
            .delete<any>(`${environment.baseUrl}/api/account/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
        // Handle the error appropriately here
        return throwError(() => new Error(error));
    }
}

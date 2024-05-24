import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Price } from '../api/global';

@Injectable()
export class PriceService {

    constructor(private http: HttpClient) { }

    getPrice() {
        return this.http.get<any>('assets/demo/data/price.json')
            .toPromise()
                .then(res => res.data as Price[])
                .then(data => data);
    
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dealer } from '../api/global';

@Injectable()
export class DealerService {

    constructor(private http: HttpClient) { }

    getDealers() {
        return this.http.get<any>('assets/demo/data/dealers-system.json')
            .toPromise()
                .then(res => res.data as Dealer[])
                .then(data => data);
    
    }
}

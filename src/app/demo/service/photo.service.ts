import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../api/image';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages() {
        return this.http.get<any>('assets/demo/data/photos.json')
            .toPromise()
            .then(res => res.data as Image[])
            .then(data => data);
    }

    getLandingImages() {
        return this.http.get<any>('assets/demo/data/landing-photos.json')
            .toPromise()
            .then(res => res.data as Image[])
            .then(data => data);
    }

    getImages2() {
        return this.http.get<any>('assets/demo/data/photos2.json')
            .toPromise()
            .then(res => res.data2 as Image[])
            .then(data2 => data2);
    }
}

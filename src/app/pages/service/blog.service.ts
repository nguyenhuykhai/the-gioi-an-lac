import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model.ts/global';

@Injectable()
export class BlogService {

    constructor(private http: HttpClient) { }

    getHighLighBlog() {
        return this.http.get<any>('assets/demo/data/blog.json')
            .toPromise()
                .then(res => res.data as Blog[])
                .then(data => data);
    
    }
}

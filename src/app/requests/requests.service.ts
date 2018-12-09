import { Request } from './request/request.model';
import { ADHOC_API } from '../app.api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RequestsService {
    constructor(private http: Http) {}

    requests(): Observable<Request[]> {
        return this.http.get(`${ADHOC_API}/requests`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    requestById(id: string): Observable<Request> {
        return this.http.get(`${ADHOC_API}/requests/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}

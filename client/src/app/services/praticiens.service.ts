import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Praticiens } from '../../app/praticiens';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PraticiensService {
 
  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of products from remote server.
  readPraticiens(): Observable<Praticiens[]> {
      return this._http
          .get('http://localhost/api/praticien/read.php')
          .pipe(map((res: Response) => res.json()));
  }
}

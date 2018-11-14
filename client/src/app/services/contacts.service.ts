import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contacts } from '../../app/contacts';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
 
  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of products from remote server.
  readContacts(): Observable<Contacts[]> {
      return this._http
          .get('http://localhost/api/contact/read.php')
          .pipe(map((res: Response) => res.json()));
  }
}
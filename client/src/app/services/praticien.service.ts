import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PraticienService {

  private _PraticiensUrl = "http://localhost:3000/praticiens/praticiens"

  constructor(private http: HttpClient) { }


  Praticiens(){
    return this.http.get<any>(this._PraticiensUrl)
  }
}
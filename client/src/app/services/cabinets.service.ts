import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class CabinetsService {

    private _cabinetsUrl = "http://localhost:3000/cabinets/cabinets";

    constructor(private http: HttpClient) { }

    getCabinets() {
        return this.http.get<any>(this._cabinetsUrl)
    }
}

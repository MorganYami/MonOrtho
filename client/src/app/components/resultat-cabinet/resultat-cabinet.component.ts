import { Component, OnInit } from '@angular/core';
// import { Cabinet } from "./../../models/cabinet";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-resultat-cabinet',
  templateUrl: './resultat-cabinet.component.html',
  styleUrls: ['./resultat-cabinet.component.css']
})


export class ResultatCabinetComponent implements OnInit {

  constructor(private http: Http) { }

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  debut:number = 0;
  fin:number = 4;

  // paged items
  pagedItems: any[];

  ngOnInit() {
      // get data
      this.http.get('/assets/cabinet.json')
          .pipe(map((response: Response) => response.json()))
          .subscribe(data => {

              this.allItems = data;

          });
  }

}












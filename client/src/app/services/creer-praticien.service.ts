import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CreerPraticienService {

  private _creerPraticienUrl = "http://localhost:3000/creerpraticien";
  public reponse: string;

  constructor(private http: HttpClient,
    private _router: Router) { }

    //envoi des données sur le serveur
  creerPraticien(data) {
    console.log("Envoyé: ", data);
    this.http.post(`${this._creerPraticienUrl}/creerpraticien`, data)
      .subscribe(
        res => {
          console.log("Réponse: ", res);
        },
        err => {
          console.log('Il y a eu une erreur: ', err);
        }
      )
  }
}

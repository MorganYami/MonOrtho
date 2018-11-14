import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Praticien {
  "id_praticien": number, "nom_praticien": string, "prenom_praticien": string, "photo_praticien": string, "sexe": string, "diplome": string, "description_praticien": string, "titre": string, "date_creation_praticien": string
}
@Injectable()
export class CreerCabinetService {

  private _creerCabinetUrl = "http://localhost:3000/creercabinet";
  private _getPraticiensUrl = "http://localhost:3000/praticien";
  private _CodeCabinetUrl = "http://localhost:3000/codecabinet/codecabinet";

  constructor(private http: HttpClient,
    private _router: Router) { }

  //recuperation des codes cabinets
  CodeCabinet() {
    return this.http.get<any>(this._CodeCabinetUrl)
  }

  //envoi des données sur le serveur
  creerCabinet(data) {
    console.log("Envoyé: ", data);
    this.http.post(`${this._creerCabinetUrl}/creercabinet`, data)
      .subscribe(
        res => {
          console.log("Réponse: ", res);
        },
        err => {
          console.log('Il y a eu une erreur: ', err);
        }
      )
  }

  //récupération de la liste des praticiens
  getPraticien() {
    return this.http.get<Praticien>(`${this._getPraticiensUrl}/getpraticiens`)
  }
}

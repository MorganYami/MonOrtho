import { Component, OnInit } from '@angular/core';
import { CreerPraticienService } from '../../services/creer-praticien.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Settings } from '../../services/settings';
@Component({
  selector: 'app-creation-praticien',
  templateUrl: './creation-praticien.component.html',
  styleUrls: ['./creation-praticien.component.css']
})
export class CreationPraticienComponent implements OnInit {

  nom: string;
  prenom: string;
  sexe: string;
  diplome: string;
  specialite: string;
  description: string;
  titre: string;
  photo: any;

  pathImgPraticiens = Settings.urlIp + "/assets/img/praticiens/";

  constructor(private _creerPraticien: CreerPraticienService, private sanitizer: DomSanitizer) { this.photo = "/src/assets/img/personnaImg.png", this.sexe = "Masculin" }

  ngOnInit() {
  }

  //ajout ou modification de la  photo
  onSelectPhotoPraticien(event) { 
    if (event.target.files && event.target.files[0]) {
      this.photo = this.pathImgPraticiens + event.target.files[0].name;
    }
  }

  //envoi des données au service
  creerPraticien(data) {
    if (this.photo == "/src/assets/img/personnaImg.png"){
      this.photo = "";
    }
    //enregistrer dans la base de données
    this._creerPraticien.creerPraticien(data = [
      this.nom, 
      this.prenom, 
      this.sexe, 
      this.diplome, 
      this.specialite, 
      this.description, 
      this.titre,
      this.photo
    ]);
  }
}
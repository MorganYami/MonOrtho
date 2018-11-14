import { Component, OnInit } from '@angular/core';
import { CreerCabinetService } from '../../services/creer-cabinet.service'
import { PraticienService } from "../../services/praticien.service"
import { DomSanitizer } from '@angular/platform-browser';
import { Settings } from '../../services/settings';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-creation-cabinet',
  templateUrl: './creation-cabinet.component.html',
  styleUrls: ['./creation-cabinet.component.css']
})
export class CreationCabinetComponent implements OnInit {

  _id_cabinet: number;
  nom_cabinet: string;
  code_cabinet: string;
  logo: any;
  // photo_slider: Array<string> = [];
  photo_slider: string;     //modifier le slider!!!

  description_cabinet: string;
  adresse: string;
  code_postal: number;
  ville: string;
  horaire_cabinet: Array<string> = [];
  telephone: number;
  mail: string;
  site_web: string;

  liste_mdp: Array<string>;
  liste_praticiens: any;
  praticiens_linked = [];

  pathImgCabinets = Settings.urlIp + '/assets/img/cabinets/';
  pathImgLogo = Settings.urlIp + "/assets/img/logos/";

  constructor(private http: HttpClient, private _creerCabinet: CreerCabinetService, private _getPraticiens: PraticienService, private sanitizer: DomSanitizer, private _getCodeCabinet: CreerCabinetService) {
    this.logo = "/src/assets/img/logoImg.png", this.liste_mdp = []
  }

  ngOnInit() {
    this.getPraticien();
    //récupèration des codes existant pour comparaison
    this._getCodeCabinet.CodeCabinet()
      .subscribe(
        res => this.liste_mdp = res,
        err => console.log("Something get wrong: ", err)
      );
      
  }
  
  //récupération de la liste des praticiens
  getPraticien() {
    this._getPraticiens.Praticiens()
      .subscribe(
        res => { /*console.log("Réponse: ", res);*/ this.liste_praticiens = res;},
        err => console.log("Something get wrong: ", err)
      );
  }

  //ajout d'un logo
  onSelectLogo(event) {
    if (event.target.files && event.target.files[0]) {
      this.logo = this.pathImgLogo + event.target.files[0].name;
    }
  }

  //ajout d'une photo pour le slider
  onAddPhoto(event) {
    if (event.target.files && event.target.files[0]) {
      // this.photo_slider.push(this.pathImgCabinets + event.target.files[0].name);
      this.photo_slider = this.pathImgCabinets + event.target.files[0].name;
    }
  }

  // generation d'un code unique
  onGenererCode() {   
    let mdp = "";
    let lengthListe = this.liste_mdp.length;
    let verif = true;
    let p = "1234567890AZERTYUIOPQSDFGHJKLMWXCVBN1234567890";
    let lp = p.length;
    function genererMdp() {
      mdp = "";
      for (let i = 0; i < 5; i++) {
        let xp = Math.round(Math.random() * lp);
        mdp += p.substring(xp, xp + 1);
      }
    }
    do {
      genererMdp();
      for (let j = 0; j < lengthListe; j++) {
        if (mdp === this.liste_mdp[j]) {
          verif = false;
        } else {
          verif = true;
        }
      }
      if (verif === true) {
        this.code_cabinet = mdp;
        console.log("password: " + mdp);
      } else {
        console.log("This password already exist, restarting...")
        genererMdp();
      }
    } while (verif === false);
  }

  //ajout d'un praticien dans la liste
  ajouterPraticien(datas) {
    var l = this.liste_praticiens[0].id_praticien;
    let data2 = datas -l;
    this.praticiens_linked.push(this.liste_praticiens[data2]);
  }
  //vider la liste de praticien
  voidPraticiens() {
    this.praticiens_linked = [];
  }

  //envoi des données au service
  creerCabinet(data) {
    if (this.logo == "/src/assets/img/logoImg.png") {
      this.logo = "";
    }
    //enregistrer dans la base de données
    this._creerCabinet.creerCabinet(data = [
      this.nom_cabinet,
      this.code_cabinet,
      this.horaire_cabinet,
      this.description_cabinet,
      this.logo,
      this.photo_slider,
      this.adresse,
      this.code_postal,
      this.ville,
      this.telephone,
      this.mail,
      this.site_web,
      this.praticiens_linked
    ]);
  }

}

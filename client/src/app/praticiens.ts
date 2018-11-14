export class Praticiens {
    constructor(
        public id_praticien: number,
        public nom_praticien: string,
        public prenom_praticien: string,
        public photo_praticien: string,
        public sexe: string,
        public diplome: string,
        public description_praticien: string,
        public titre: string,
        public specialite: string,
        public date_creation_praticien: string,
        public date_fin: string
    ){}
}

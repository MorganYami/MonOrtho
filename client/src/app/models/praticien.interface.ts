export interface Praticien {
    _id: number;
    nom: string;    
    prenom: string,
    sexe: string;
    diplome: string;
    specialite: string;
    description: string;
    photo: string | ArrayBuffer;
}

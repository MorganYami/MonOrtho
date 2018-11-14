export class Contacts {
    constructor(
    public id_contact: number,
    public telephone_domicile: string,
    public telephone_mobile: string,
    public mail: string,
    public adresse_ligne1: string,
    public adresse_ligne2: string,
    public code_postal: string,
    public ville: string,
    public site_web: string,
    public date_creation_contact: string
    ){}   
}

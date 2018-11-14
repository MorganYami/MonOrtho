import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PraticiensComponent } from './components/praticiens/praticiens.component';
import { CreationPraticienComponent } from './components/creation-praticien/creation-praticien.component';
import { CabinetsComponent } from './components/cabinets/cabinets.component';
import { CreationCabinetComponent } from './components/creation-cabinet/creation-cabinet.component';
import { ResultatCabinetComponent } from './components/resultat-cabinet/resultat-cabinet.component';
import { RechercherCabinetComponent } from './components/rechercher-cabinet/rechercher-cabinet.component';
import { RechercherPraticienComponent } from './components/rechercher-praticien/rechercher-praticien.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch : 'full'},
    {path:'login', component:LoginComponent},
    {path:'cabinets', component:CabinetsComponent, canActivate:[AuthGuard]},
    {path:'creation-cabinet', component:CreationCabinetComponent, canActivate:[AuthGuard]},
    {path:'resultat-cabinet', component:ResultatCabinetComponent, canActivate:[AuthGuard]},
    {path:'rechercher-cabinet', component:RechercherCabinetComponent, canActivate:[AuthGuard]},
    {path:'rechercher-praticien', component:RechercherPraticienComponent, canActivate:[AuthGuard]},
    {path:'praticiens', component:PraticiensComponent, canActivate:[AuthGuard]},
    {path:'creation-praticien', component:CreationPraticienComponent, canActivate:[AuthGuard]},
    // {path:'resultat-praticien', component:ResultatPraticienComponent, canActivate:[AuthGuard]},
    // erreur 404 a mettre a la fin
    // {path:'**', component:Erreur404Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

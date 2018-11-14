import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CabinetsComponent } from './components/cabinets/cabinets.component';
import { CreationCabinetComponent } from './components/creation-cabinet/creation-cabinet.component';
import { PraticiensComponent } from './components/praticiens/praticiens.component';
import { CreationPraticienComponent } from './components/creation-praticien/creation-praticien.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { ResultatCabinetComponent } from './components/resultat-cabinet/resultat-cabinet.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InterceptAuthService } from './services/interceptAuth.service';
import { CreerPraticienService } from './services/creer-praticien.service';
import { CreerCabinetService } from './services/creer-cabinet.service';
import { PraticienService } from './services/praticien.service';
import { RechercherCabinetComponent } from './components/rechercher-cabinet/rechercher-cabinet.component';
import { RechercherPraticienComponent } from './components/rechercher-praticien/rechercher-praticien.component';
// // A changer car obsolete : https://angular.io/api/http/Http
// import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    {path: 'praticien', component: CreationPraticienComponent},
  ];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CabinetsComponent,
        CreationCabinetComponent,
        PraticiensComponent,
        CreationPraticienComponent,
        MenuComponent,
        HeaderComponent,
        ResultatCabinetComponent,
        RechercherCabinetComponent,
        RechercherPraticienComponent,
        // // A changer car obsolete : https://angular.io/api/http/Http
        // HttpModule,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        NgxPaginationModule,
    ],
    providers: [AuthGuard, AuthService, PraticienService, CreerPraticienService, CreerCabinetService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptAuthService,
            multi: true
        }],
    bootstrap: [AppComponent],

})
export class AppModule { }

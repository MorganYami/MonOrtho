import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserData = {}

    constructor(private _auth: AuthService, 
                private _router: Router) { }

    ngOnInit() {
    }

    loginUser() {
        // Reset wrong password animation 
        document.querySelector("form").className = "container";

        this._auth.loginUser(this.loginUserData)
            .subscribe(
                res => {
                    localStorage.setItem('token', res.token)
                    this._router.navigate(['/cabinets'])
                },
                err => {
                    document.querySelector("form").className = "container wrong";
                    document.querySelector("span").innerHTML = 
                        `<div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">Identifiants incorrects !</h4>
                            <hr>
                            <p class="mb-0">Contactez l'administrateur de la base de données...</p>
                        </div>`;
                })
    }
}
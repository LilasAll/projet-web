import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  login() {
    console.log('Tentative de connexion');
    //permet de verif si les login/mdp sont corrects, par exemple par une requête à un service REST 
    localStorage.setItem('user', JSON.stringify({login : this.model.pseudo})); 
    this.router.navigate(['/home']);
  }

}

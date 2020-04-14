import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  login() {
    console.log('Tentative de connexion');
    //permet de verif si les login/mdp sont corrects, par exemple par une requête à un service REST 
    localStorage.setItem('user', JSON.stringify({login : this.model.pseudo})); 
    this.router.navigate(['/home']);

    // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/home';

    // On accède à la page souhaitée
    this.router.navigate([redirectUrl]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  validation="disponible";
  cat;

  accept(){
    this.validation="acceptée";
  }

  redirect() {
    this.router.navigate(['/demandes'])
  }



}

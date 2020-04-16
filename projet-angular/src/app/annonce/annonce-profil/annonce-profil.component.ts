import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-annonce-profil',
  templateUrl: './annonce-profil.component.html',
  styleUrls: ['./annonce-profil.component.css']
})
export class AnnonceProfilComponent implements OnInit {
  [x: string]: any;
  form: FormGroup;
  id: any;
  annonce:any;

  constructor(private annonceService: AnnonceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.form = new FormGroup({
      demandId: new FormControl(null)
  })
}
  validation="disponible";
  cat;
  title;
  description;

  accept(){
    this.validation="acceptée";
  }


  find(){
    this.annonce = this.annonceService.getOne(19);
    console.log(this.annonce);
    this.title=this.annonce.subscribe(data=>{
      this.totalAngularPackages = data.total
    }
      )
  }

  redirect() {
    this.router.navigate(['/demandes'])
  }

}

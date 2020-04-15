import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  form: FormGroup;
  index:any;
  mode: boolean;

  constructor( private UserService: UserService, private ActivatedRoute: ActivatedRoute, private router: Router) { }
  

  ngOnInit(): void {


    this.form = new FormGroup({
      id : new FormControl(null),
      pseudo : new FormControl(null,Validators.required),
      email : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    })

    this.ActivatedRoute.params.subscribe ((param: Params) => {
      this.index = param['index'];

      if(this.index) {
        this.form.setValue(this.UserService.users [this.index]);
      }
    })

    //this.mode = this.UserService.editMode;
  }

  addUser() {
     this.UserService.users.push(this.form.value);
     console.log(this.UserService.users); 
     this.router.navigate(['/home'])
  }
}

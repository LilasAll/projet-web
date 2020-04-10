import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      pasword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      paswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      postalCode: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      ppasword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

}

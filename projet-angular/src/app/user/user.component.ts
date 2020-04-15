import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.Router.navigate(['/user/form'])
  }

}

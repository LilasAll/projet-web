import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
}

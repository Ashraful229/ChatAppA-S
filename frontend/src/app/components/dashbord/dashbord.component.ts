import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getUser()
  {
    this.userService.getUser().subscribe(data=>{
      console.log(data);
    })
  }


}


import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernamepassword=
  {
    userName:'',
    password:''
  }
  constructor(
    private toastr: ToastrService,
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
   if((this.usernamepassword.userName!=null && this.usernamepassword.password!=null) && (this.usernamepassword.userName!='' && this.usernamepassword.password!=''))
  {

    this.loginService.doLOgin(this.usernamepassword).subscribe(
      (data:any)=>{
        if(data!=null)
        {
          this.loginService.loginUser(data);
          this.toastr.success('Login Successfully');

          window.location.href='/dashbord';
          //this.router.navigate(['dashbord']);

        }
        else
        {
          this.toastr.error('Invalid Credentials');
        }

      }


    );
  }
  else
  {
    this.toastr.error('Please enter username and password');
  }

}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


url="http://localhost:8081/jwt";


  constructor(private http:HttpClient) { }

  doLOgin(usernamepassword:any)
  {

   return this.http.post(this.url+"/authenticate",usernamepassword,{responseType:'text'});
  }




  //for login user
  loginUser(token: string)
  {
    localStorage.setItem('token',token);
    return true;
  }
  // for checking user is logged in or not
  isLoggedIn()
  {
   let token=localStorage.getItem('token');
   if(token==undefined||token==null||token=='')
   {
     return false;
   }
   else
   {
     return true;
   }
  }

  logOut()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
  //get user
  getUser()
  {
    let token=localStorage.getItem('token');
    if(token!=undefined||token!=null||token!='')
    {
      return this.http.get(this.url+"/user");
    }
    else
    {
      return null;
    }
  }


}

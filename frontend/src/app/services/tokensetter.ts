import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class Tokensetter implements HttpInterceptor {
   

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        //add the jwt token (LocalStorage) request
        let authReq = req;
        const token =localStorage.getItem("token");
    
        alert(token)
        if (token != null) {
          authReq = authReq.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          });
        }
    
        return next.handle(authReq);
      }
   
    
  
}


export const authInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Tokensetter,
      multi: true,
    },
  ];



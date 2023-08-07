import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { API_HOST } from "src/app/config/api.config";
import { Credenciais } from "src/app/models/credenciais";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private http: HttpClient){

    }

    jwtService: JwtHelperService = new JwtHelperService

    authentication(credenciais: Credenciais){
    return this.http.post(`${API_HOST.baseUrl}/login`, credenciais, {
    observe: 'response',
    responseType: 'text'

        })
    }

    successfulLogin(token: string){
        localStorage.setItem('token', token)
    
      }

     isAuthenticated(){
        let token = localStorage.getItem('token')
        if(token !== null ){
            return !this.jwtService.isTokenExpired(token)
        }
        return false;
     } 

     logout(){
        localStorage.clear();
      }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
    ){
    
  }

  ngOnInit(): void {
      
  }
  
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3))

  credenciais: Credenciais = {
    email: '',
    senha: ''
  }


  login(){
    this.service.authentication(this.credenciais).subscribe(response => {
      this.toast.info(response.headers.get('Authorization'))
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.router.navigate([''])
    }, () => {
      this.toast.error('E-mail ou senha inválida.');
    }
    )
  }

}

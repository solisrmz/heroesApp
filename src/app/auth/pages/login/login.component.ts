import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  usuario!: Auth;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login().subscribe( resp => {
      this.usuario = resp;
      console.table(this.usuario);
      if( resp.id ){
        this.router.navigate(['/heroes'])
      }
    });
  }
}

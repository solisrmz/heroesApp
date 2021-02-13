import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [
    `
    .container{
      margin: 10px;
    }
    `
  ]
})
export class HeroesHomeComponent implements OnInit {
  isExpanded : boolean = false;
  heroes: Heroe[] = [];

  get auth(){
    return this.authService.auth;
  }

  constructor(private hservice: HeroesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.allHeroes();
  }

  allHeroes(){
    this.hservice.getHeroes().subscribe( data => {
      this.heroes = data;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['./auth/login'])
  }
}

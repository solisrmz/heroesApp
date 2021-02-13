import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
    `
  ]
})
export class HeroesHomeComponent implements OnInit {

  isExpanded : boolean = false;
  heroes: Heroe[] = [];
  constructor(private hservice: HeroesService) { }

  ngOnInit(): void {
    this.allHeroes();
  }

  allHeroes(){
    this.hservice.getHeroes().subscribe( data => {
      this.heroes = data;
      console.log(this.heroes);
    });
  }

}

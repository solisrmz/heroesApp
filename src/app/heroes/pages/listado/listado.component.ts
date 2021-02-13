import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private hservice: HeroesService) { }

  ngOnInit(): void {
    this.allHeroes();
  }

  allHeroes(){
    this.hservice.getHeroes().subscribe( data => {
      this.heroes = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from 'src/app/interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroesSeleccionado!: Heroe;
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.search(this.termino.trim()).subscribe(data => {
      this.heroes = data;
    })
  }

  selected(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      console.log('No hay');
      return;
    }
      const heroe: Heroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroesService.getHeroe(heroe.id).subscribe( resp => {
        this.heroesSeleccionado = resp;
        console.log(this.heroesSeleccionado);
      });  
  }
}

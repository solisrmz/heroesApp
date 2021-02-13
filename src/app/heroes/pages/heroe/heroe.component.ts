import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe(){
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.heroesService.getHeroe(id))
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}

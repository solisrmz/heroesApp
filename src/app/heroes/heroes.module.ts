import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [AgregarComponent, BuscarComponent, HeroeComponent, HeroesHomeComponent, ListadoComponent, CardComponent],
  imports: [
    CommonModule, 
    HeroesRoutingModule, 
    FlexLayoutModule, 
    MaterialModule,
  ]
})
export class HeroesModule { }

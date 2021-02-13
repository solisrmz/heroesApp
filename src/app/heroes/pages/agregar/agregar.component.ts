import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmacionComponent } from '../../components/confirmacion/confirmacion.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      descripcion: 'DC-Comics'
    },
    {
      id: 'Marvel Comics', 
      descripcion: 'Marvel-Comics'
    }
  ];

  heroe: Heroe = {
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '', 
    alt_img: '',
  }
  constructor(private heroeService: HeroesService, private activateRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.router.url.includes('edita')){
      return;
    }
    this.getHeroe();
  }

  save(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.heroeService.update(this.heroe).subscribe( resp => {
        console.log(resp);
      });
    }else{
      this.heroeService.save(this.heroe).subscribe( resp => {
        this.router.navigate(['/heroes/editar', this.heroe.id]);
      });
    }
    this.openSnackBar("Cambios guardados");
  }

  getHeroe(){
    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.heroeService.getHeroe(id))
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  delete(id: string){
    const dialog = this.dialog.open(ConfirmacionComponent, {
      width: '500px', 
      data: this.heroe
    });

    dialog.afterClosed().subscribe( (result) => {
      if(result){
        this.heroeService.delete(id).subscribe( resp => {
          this.router.navigate(['/heroes'])
        });
      }
    });
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    })
  }
}

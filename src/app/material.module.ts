import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  ], 
  exports: [
    MatSidenavModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatCardModule, 
    MatGridListModule, 
    MatProgressSpinnerModule, 
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule
  ]
})
export class MaterialModule { }

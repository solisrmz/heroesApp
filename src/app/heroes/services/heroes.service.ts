import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Heroe } from '../../interfaces/heroe';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    const url = base_url;
    return this.http.get<Heroe[]>(`${url}heroes`);
  }

  getHeroe(id: string){
    const url = base_url;
    return this.http.get<Heroe>(`${url}heroes/${id}`);
  }

  search(key: string){
    const params = new HttpParams().set('q',key).set('&_limit','6');
    const url = base_url;
    return this.http.get<Heroe[]>(`${url}heroes`, {params});
  }
}

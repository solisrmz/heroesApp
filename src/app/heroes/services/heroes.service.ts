import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Heroe } from '../../interfaces/heroe';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
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
}

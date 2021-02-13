import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) { }

  get auth(): Auth{
    return {...this._auth!}
  }

  login(){
    const url = base_url;
    return this.http.get<Auth>(`${url}usuarios/1`).pipe(
      tap( resp => this._auth = resp),
      tap( resp => localStorage.setItem('id', resp.id))
    );
  }

  logout(){
    this._auth = undefined;
    localStorage.removeItem('id');
  }

  verify(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false);
    }
    return this.http.get<Auth>(`${base_url}usuarios/1`).pipe(
      map( resp  =>{
        this._auth = resp
        return true;
      })
    );
  }
}

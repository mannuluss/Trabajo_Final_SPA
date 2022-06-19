import { Injectable } from '@angular/core';
//import { Users } from './usuario.json';
import { Usuario } from './usuario';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from './ciudad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    let a = this.http.get<Usuario[]>(this.apiUrl);
    console.log(a);
    return a;
  }

  getUser(): Observable<Usuario> {
    let id = localStorage.getItem('id');
    let a = this.http.get<Usuario>(`${this.apiUrl}/usuario/${id}`);
    console.log(a);
    return a;
  }

  getCity(): Observable<Ciudad[]> {
    let a = this.http.get<Ciudad[]>(`${this.apiUrl}/ciudad/`);
    console.log(a);
    return a;
  }

  gettipo(){
    return this.http.get(`${this.apiUrl}/tipo`);
  }

  createUser(data:Usuario){
    return this.http.post('http://localhost:3000/create/',data);
  }

  updateUser(data:Usuario){
    return this.http.post('http://localhost:3000/update/',data);
  }

  deleteUser(id:string){
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  /*
  getUsers(): Observable<Usuario[]> {
    return of(this.http.get(this.apiUrl));
  }*/
  /*getUsers(){
    let a = this.http.get(this.apiUrl);
    console.log(a);
    return a;
  }*/
}

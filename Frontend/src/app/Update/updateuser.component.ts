import { Component , HostBinding, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import { Ciudad } from '../usuarios/ciudad';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Updateuser',
  templateUrl: './updateuser.component.html',
})
export class UpdateuserComponent implements OnInit{
  User:Usuario = new Usuario;//cuando se inicializa puede ser omitido los parentesis en caso de que no tengo un constrcutor con parametros
  ciudades:Ciudad[];
  tipoId;

  //@HostBinding('class') classes = 'row';

  constructor(private userservice: UsuarioService,private router:Router) { }

  /*getUsers(): Observable<User> {
      let id = localStorage.getItem('id');
      let a = this.http.get<User>(`${this.apiUrl}/${id}`);
      console.log(a);
      return a;
  }*/

  ngOnInit(){
      this.userservice.getUser().subscribe( (user) => 
      {   this.User = user; 
          console.log(user);
      });
      this.userservice.getCity().subscribe( (city) => {
        this.ciudades = city; 
        console.log(this.ciudades);
      });
      this.userservice.gettipo().subscribe( (type) => {
        this.tipoId = type; 
        console.log(type);
      });
      
       //this.Users = this.userservice.getUsers();
  }

  UpdateUsuario(){
    console.log(this.User);
    this.userservice.updateUser(this.User).subscribe( 
      res =>{
        console.log(res);
        this.router.navigate(['/']);//se va a la pantalla inicial
      }, 
      err=>{}
      );
  }
}

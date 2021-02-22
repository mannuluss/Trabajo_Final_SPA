import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  Usuarios;

  constructor(private userservice: UsuarioService) {
  }

  solicitardata(){
    this.userservice.getUsers().subscribe(
      (usuarios) => this.Usuarios = usuarios
    );
  }
  ngOnInit(){
    this.solicitardata();
  }

  SetIdUser(id){
    //console.log(id);
    localStorage.setItem('id', id);
  }

  Delete(id:string){
    console.log(id);
    this.userservice.deleteUser(id).subscribe( 
      res =>{
        console.log(res);
        this.solicitardata();
      }, 
      );
  }
}

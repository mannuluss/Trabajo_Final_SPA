import { Component , OnInit } from '@angular/core';
import { Ciudad } from '../usuarios/ciudad';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-create',
    templateUrl:'./createuser.component.html'
})
export class CreateUserComponent  implements OnInit{
    User:Usuario = new Usuario;
    tipoId;
    ciudades:Ciudad[];

    constructor(private userservice:UsuarioService,private router:Router){}

    ngOnInit(){
        
        this.userservice.gettipo().subscribe( (type) => {
            this.tipoId = type; 
            console.log(type);
        });
        this.userservice.getCity().subscribe( (city) => {
            this.ciudades = city; 
            //console.log(city);
            console.log(this.ciudades);
          });
    }

    CreateUser(){
        console.log(this.User);
        //this.userservice.createUser(this.User);
        this.userservice.createUser(this.User).subscribe( 
            res =>{
                console.log(res);
                this.router.navigate(['/']);
            }, 
            err=>{ }
        );
        
    }
}
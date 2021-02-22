import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import  { HeaderComponent } from './header/header.component';
import { CreateUserComponent } from './CreateUser/createuser.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { UpdateuserComponent } from './Update/updateuser.component';

const routes: Routes =[
  {path: '',redirectTo: '/usuario', pathMatch:'full'},
  {path: 'create', component: CreateUserComponent },
  {path: 'usuario', component: UsuariosComponent},
  {path: 'usuario/:id', component: UpdateuserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateUserComponent,
    UpdateuserComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

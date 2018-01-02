import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RoutingModule } from './app.router';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
import { UsuarioService } from './usuarios/shared/usuarioService';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuarioService';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

  private listaUsuario : UsuarioModel[];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.recuperarUsuarios().subscribe(temp => this.listaUsuario = temp);
  }

}

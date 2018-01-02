import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UsuarioModel } from "./usuario.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioService {
    
    private endereco:string = "http://10.100.100.40:8080/usuario";
    
    constructor(private http : HttpClient){}

    public recuperarUsuarios() : Observable<UsuarioModel[]> {
        return this.http.get<UsuarioModel[]>(this.endereco);
    }

    public deletarUsuario(id : number) : void{
        let enderecoDelete = this.endereco + "/" + id;
        this.http.delete<void>(enderecoDelete);
    }

}
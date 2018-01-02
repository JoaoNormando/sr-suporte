import { Routes, RouterModule } from '@angular/router'
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
const routes: Routes = [
    //home
    {
        path: 'novo-usuario',
        component: UsuarioComponent
    },
    {
        path: 'lista-usuario',
        component: ListaUsuarioComponent
    }
];
export const RoutingModule = RouterModule.forRoot(routes);
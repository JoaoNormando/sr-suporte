import { Routes, RouterModule } from '@angular/router'
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
const routes: Routes = [
    //home
    {
        path: 'usuario',
        component: UsuarioComponent
    }  
];
export const RoutingModule = RouterModule.forRoot(routes);
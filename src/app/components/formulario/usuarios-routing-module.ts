import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { FormularioComponent } from './formulario.component';

const routes: Routes = [
    { path: '', component: UsuariosComponent},      
    { path: 'novo', component: FormularioComponent},
    { path: 'editar/:id', component: FormularioComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsuariosRoutingModule { }
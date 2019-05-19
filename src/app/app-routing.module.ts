import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent, FormularioComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    data: { title: 'Home'}

  },
  {
    path: 'teste',
    component: FormularioComponent,
    data: { title: 'Home'}

  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent, FormularioComponent, HomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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

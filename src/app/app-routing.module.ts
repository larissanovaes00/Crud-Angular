import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, EditComponent, FormularioComponent, PrincipalComponent} from './components';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    data: { title: 'Home'}

  },
  {
    path: 'edit/user/:id',
    component: EditComponent

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent, UsuariosComponent, HomeComponent, EditComponent} from './components'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';


@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
    UsuariosComponent,
    EditComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

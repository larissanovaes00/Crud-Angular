import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent, UsuariosComponent } from './components'
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }

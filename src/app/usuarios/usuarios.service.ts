import { Injectable, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {FormularioAPI} from '../app.api'

Injectable({
  providedIn: 'root'
})

export class UsuariosService implements OnInit {

  constructor(private http: HttpClient) { console.log('oi')}

  ngOnInit(){
    console.log("oi");
  }
      
  list(){
    return this.http.get(FormularioAPI);
  }
  
}

console.log(FormularioAPI);

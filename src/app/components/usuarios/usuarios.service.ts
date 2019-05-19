import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}

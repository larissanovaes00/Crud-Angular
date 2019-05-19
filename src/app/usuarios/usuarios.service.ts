import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = `${environment.API}usuarios`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(usuario){
    return this.http.post(this.API, usuario).pipe(take(1));
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/usuarios/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>  {
    return this.http.get<User[]>(apiUrl)
    .pipe(
        tap(user => console.log('listou os usuarios')),
        catchError(this.handleError('getUser', []))

    );
  }
  addUser (user): Observable<User> {

    return this.http.post<User>(apiUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`adicionou o user com w/ id=${user._id}`)),
      catchError(this.handleError<User>('addProduto'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o usuario com id=${id}`)),
      catchError(this.handleError<User>('deleteUsuario'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }


}





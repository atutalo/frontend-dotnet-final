import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'https://localhost:5001/api/Auth';
  tokenKey: string = 'myFinalToken';

  constructor(private http: HttpClient) {}

  signUp(newUser: User): Observable<any> {
    return this.http.post(`${this.baseURL}/register`, newUser);
  }

  signIn(email: string, password: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    return this.http
      .get(`${this.baseURL}/signin`, {
        params: queryParams,
        responseType: 'text',
      })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('myFinalToken', response);
        })
      );
  }

  getCurrentUser(): Observable<User> {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`,
    };
    return this.http.get<User>(`${this.baseURL}/current`, {
      headers: reqHeaders,
    });
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.baseURL + '/' + username)};
  
}

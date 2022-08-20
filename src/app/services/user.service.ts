import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { SignInRequest } from '../models/sign-in-request';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'https://localhost:7025/api/Auth';

  constructor(private http: HttpClient) {}

  signUp(newUser: User) {
    return this.http.post('${this.baseUrl}/register', newUser);
  }

  signIn(request: SignInRequest) {
  
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', request.email);
    queryParams = queryParams.append('password', request.password);

    return this.http
      .post(`${this.baseURL}/signin`, {
        params: queryParams,
        responseType: 'text',
      })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('myFinalToken', response);
        })
      );

  }

  getCurrentUser() {
    return this.http.get('${this.baseUrl}/current');
  }
}

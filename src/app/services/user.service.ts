import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

interface User {
  username: String;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL_USERS = 'users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL_USERS)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getUserById(id: number): Observable<User> {
    return Observable.of();
  }

  private handleError(heroes: string, anies: any[]) {
    return undefined;
  }
}

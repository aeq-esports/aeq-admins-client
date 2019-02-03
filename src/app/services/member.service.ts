import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

interface Member {
  id: number;
  username: String;
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private API_URL_USERS = 'members';

  constructor(private http: HttpClient) {
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.API_URL_USERS)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  getMemberById(id: number): Observable<Member> {
    return Observable.of();
  }

  updateMember() {

  }

  deleteMemberById(id: number): Observable<void> {
    return Observable.of();
  }

  private handleError(heroes: string, anies: any[]) {
    return undefined;
  }
}

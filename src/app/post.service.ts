import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { map, tap, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  posts: Post[];
  constructor(private httpClient: HttpClient) {}

  getPosts(url: string): Observable<Post[]> {
    const params = new HttpParams().set("sortBy", "test").set("abc", "xyz");
    const headers = new HttpHeaders().set("applicationName", "test");
    return this.httpClient
      .get<Post[]>(url, { params, headers })
      .pipe(
        tap(x => console.log(x.length)),
        map(x => {
          return x.slice(0, 10);
        }),
        map(x => {
          return x.map(p => {
            return { ...p, id: `${p.id}-test` };
          });
        }),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}

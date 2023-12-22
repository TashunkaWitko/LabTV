import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  constructor(private http: HttpClient) { }

  apiKey:string="c4a28e481d2a27299b6e7f78461b3edd";
  https:string="https://api.themoviedb.org/3/movie/popular?api_key=c4a28e481d2a27299b6e7f78461b3edd";

  searchMovie(term: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=` + term +`&api_key=c4a28e481d2a27299b6e7f78461b3edd`);
  }
}

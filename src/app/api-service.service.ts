import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  wsMovies:string="https://api.themoviedb.org/3/movie/popular?api_key=c4a28e481d2a27299b6e7f78461b3edd";

  wsMoviesDetail:string=`https://api.themoviedb.org/3/movie/`;

  wsMoviesCast:string="https://api.themoviedb.org/3/movie/${id}/credits?api_key=${thi.apiKey}";

  apiKey:string="c4a28e481d2a27299b6e7f78461b3edd";
  

  getMovies():Observable<any>{
    return this.http.get(this.wsMovies) //questa chiamata restituisce un Observable da iniettare dentro la Homepage ,visualizzabdo così una lista di film popolari (popular)
  }

  getMoviesDetail(id:number):Observable<any>{
     //Questa chiamata visualizzerà il dettaglio del film selezionato immettendo della stringa il parametro id del film selezionato. essendo una chiamata parametrica metto solo la parte fissa, l'id verrà passato nel component con un metodo

    let params = new HttpParams().set("movie_id",id)

    let a = this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=enUS`,{params})

    return a
  }

  getMovieTrailer(id:number):Observable<any>{

    let params = new HttpParams().set("movie_id",id)

    let a = this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`,{params})

    return a

    //Chiamata per ottenere il trailer del film associato
  }

  getMovieCast(id:number):Observable<any>{
    let params = new HttpParams().set("movie_id",id)

    let a = this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`,{params})

    return a

    //Chiamata per ottenere il cast del film associato
  }

  getSimilarMovie(id:number):Observable<any>{
    let params = new HttpParams().set("movie_id",id)

    let a = this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`,{params})

    return a

    //Chiamata per ottenere i film consigliati dopo aver cliccato sul dettaglio di un film
  }


}


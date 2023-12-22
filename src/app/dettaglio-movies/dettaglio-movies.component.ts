import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-dettaglio-movies',
  templateUrl: './dettaglio-movies.component.html',
  styleUrls: ['./dettaglio-movies.component.css']
})
export class DettaglioMoviesComponent {

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  movieId:number=0;  //Inizializzo il movieId vuoto

  apiKey:string="eab86f42c72b2d4f5c23202ce044c952";  //Parametrizzo l'apikey

  wsMoviesDetail2:string=`?api_key=${this.apiKey}&language=enUS`; //Inserisco l'apikey nella chiamata del dettaglio

  dettaglio:Array<any> = [];

  generi:Array<any>= [];

  trailerDettaglio:Array<any>= [];

  videoUrl:string="";

  safeUrl:SafeResourceUrl="";

  castDetail:Array<any>= [];

  directorDetail:Array<any>= [];

  similarMovies:Array<any>= [];

ngOnInit(){
  
  this.movieId=this.route.snapshot.params["movie_id"]

  this.apiService.getMoviesDetail(this.movieId).subscribe(
    {

      next:(data) =>  {

        this.dettaglio = data;
        console.log(this.dettaglio);

       this.dettaglio= Object.entries(this.dettaglio)

       /*Con questo metodo (Object.entries) trasformo L'Object arrivato con la chiamata API in un Array, recuperando poi con il metodo forEach sottostante, le proprietà con i loro valori associati*/

       this.dettaglio.forEach(([key, value]) => {
        
        console.log(key, value)  /*Dalla console recupero le propeità ed i valori da implementare nell'html */
              });

        this.generi = this.dettaglio[4][1];  /*Associo l'array dei generi dei film ad una proprietà di classe Array inizializzata vuota*/

    },  /*Fine arrivo dati del dettaglio*/
      
      error: (err) => {console.log(err)},

      complete: () => {}

    }

    ) /*Fine subscribe*/
  


    /*Chiamata API per ottenere i trailer */
    this.apiService.getMovieTrailer(this.movieId).subscribe({
      next:(data) =>{
      
      this.trailerDettaglio = data.results
        /*Passo L'array contenente la chiave del trailer (results) alla proprietà di classe inizializzata vuota */
  
      this.videoUrl = `https://www.youtube.com/embed/${this.trailerDettaglio[0].key}`

    /*Definisco la stringa url parametrica da passare al metodo per renderla "Safe" ai protocolli di sicurezza */
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    /*Ottengo la stringa url e la passa all'attributo src dell'iframe */
    },
      
      error: (err) => {console.log(err)},

      complete: () => {}
    })



    /*Chiamata API per ottenere il cast ed il regista */
    this.apiService.getMovieCast(this.movieId).subscribe({
      next:(data) =>{

        this.castDetail= data.cast

        /*Ottenendo 2 array diversi, il primo riguardante il cast, il secondo riguardante la produzione, li associo a 2 array diversi */

        this.directorDetail = data.crew
      },
      error: (err) => {console.log(err)},

      complete: () => {}

    })

    this.apiService.getSimilarMovie(this.movieId).subscribe({
      next:(data) =>{
        

        this.similarMovies = data.results
        console.log(this.similarMovies)

      },
      error: (err) => {console.log(err)},

      complete: () => {}
    })

}  /*Fine NgOnInit*/



/*Inizio chiamata al dettaglio da un elemento che si trova già dentro il dettaglio,quindi il routerllink non funziona, associo perciò la chiamata ad una funzione specifica */
    GetDetailFromDetail(id:number){
      //Passo l'id come number da dentro l'html e richiamo la stessa funzione chiamata in precedenxa per ottenere i dati del dettaglio
      

      this.apiService.getMoviesDetail(id).subscribe(
    {

      next:(data) =>  {

        this.dettaglio = data;
        console.log(this.dettaglio);

       this.dettaglio= Object.entries(this.dettaglio)

       this.dettaglio.forEach(([key, value]) => {
        
        console.log(key, value)  
              });

        this.generi = this.dettaglio[4][1]; 

        /* A questo punto effetuo una seconda chiamata all'API del trailer passandogli lo stesso id del dettaglio, inserisco questa chiamata come se fosse "annidata" dentro la prima */
        
            this.apiService.getMovieTrailer(id).subscribe({
              next:(data) =>{
          
              this.trailerDettaglio = data.results
         
      
            this.videoUrl = `https://www.youtube.com/embed/${this.trailerDettaglio[0].key}`
 
            this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  
        },
          
          error: (err) => {console.log(err)},
    
          complete: () => {}
        })
    
      },  /*Fine arrivo dati del dettaglio*/

      
      error: (err) => {console.log(err)},

      complete: () => {}

    }

    ) /*Fine subscribe*/
    }

}/*Fine Classe*/

import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  listaMovies:Array<any> = [];

  ngOnInit() {
   this.apiService.getMovies().subscribe(
    {
      next:(data) => { 

         this.listaMovies = data.results;
          
     },

     error:(error) => {console.log(error)},

     complete:() => {}
    
    })
   
  } //Fine chiamata API dei film


  i:number =0;

  nextslide(){

    this.i++;
    if(this.i == this.listaMovies.length){
      this.i=0
    };

    

  }

  previouslide(){
    
    if(this.i == 0){
      this.i = this.listaMovies.length
    }
 
  this.i--;

}
}

import { Component } from '@angular/core';
import{ RicercaService } from '../../ricerca.service';


@Component({
  selector: 'app-contatti',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {

  term:string="";
  results:any={};


  myClassnull:string="alert alert-secondary";
  
  constructor(private search: RicercaService) { }
  ngOnInit() {
  }

  submitSearch() {
    this.search.searchMovie(this.term).subscribe( 
      {
        next:(data) => {
        this.results = data.results;
      console.log(this.results);
    },
    error:(error) => {console.log(error)},

    complete:() => {}
  
    });


   }//Fine metodo di ricerca dei film


  }



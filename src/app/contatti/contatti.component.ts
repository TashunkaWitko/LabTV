import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})

export class ContattiComponent {


  
  regexEmail:RegExp=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  email:string = "";
  
  errorClass:string="";

  isErrorVisible:boolean=false;

  isNotChecked:boolean=false;

  checkbox:boolean=false;

  correctSend:boolean=false;

  value:number = 0;

  isValueErrorTrue:boolean=false;

  isFormVisible:boolean=true;


  /*Creo una serie di controlli condizionali sull'invio dei dati e le possibili alternative */
  InvioDati(){

    if(this.regexEmail.test(this.email)==false &&  this.checkbox==false && this.value==0){
      this.isErrorVisible=true;
      this.isNotChecked=true;
      this.isValueErrorTrue=true;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==true &&  this.checkbox==false && this.value==0){
      this.isErrorVisible=false;
      this.isNotChecked=true;
      this.isValueErrorTrue=true;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==true && this.checkbox==true && this.value==0){
      this.isErrorVisible=false;
      this.isNotChecked=false;
      this.isValueErrorTrue=true;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==true && this.checkbox==false && this.value!==0){
      this.isErrorVisible=false;
      this.isNotChecked=true;
      this.isValueErrorTrue=false;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==false && this.checkbox==true && this.value!==0){
      this.isErrorVisible=true;
      this.isNotChecked=false;
      this.isValueErrorTrue=false;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==false && this.checkbox==true && this.value==0){
      this.isErrorVisible=true;
      this.isNotChecked=false;
      this.isValueErrorTrue=true;
      this.errorClass="alert alert-danger"
    }

    else if(this.regexEmail.test(this.email)==false && this.checkbox==false && this.value!==0){
      this.isErrorVisible=true;
      this.isNotChecked=true;
      this.isValueErrorTrue=false;
      this.errorClass="alert alert-success"
    }
    
    else if(this.regexEmail.test(this.email)==true && this.checkbox==true && this.value!==0)
    { this.isErrorVisible=false;
      this.isNotChecked=false;
      this.isFormVisible=false;
      this.isValueErrorTrue=false;
      this.correctSend=true;
      this.errorClass="alert alert-success"
    }

    
}


}

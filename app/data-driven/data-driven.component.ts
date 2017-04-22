import { Component,Pipe } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import {Response} from '@angular/http';


@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myform:FormGroup;
  public userData;
  public postData;

  constructor(private formBuilder: FormBuilder,private httpservice:HttpServiceService) {
    
        this.myform=formBuilder.group({
          'name':["",Validators.required],
          'email':['abc@k.com',Validators.required],
           'post': ['', Validators.compose([Validators.required,this.lengthValidator])]
        });

  }

  submit(){
    console.log(this.myform.value);
  }

  getData(){    



   this.userData=new Promise((resolve,reject)=>{
      this.httpservice.getUserData().subscribe(function(res:Response){      
         resolve(res.json());
    });  });   
    
    this.postData=new Promise((resolve,reject)=>{

      this.httpservice.getPostData().subscribe(function(res:Response){ 
             resolve(res.json());
    });  });   
    
  }

  lengthValidator(control:FormControl):{[str:string]:boolean}{
             if(control.value.length<10){
               return {'invalid':true};
             }
             return null;
  }

}

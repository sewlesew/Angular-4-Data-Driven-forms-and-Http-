import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class HttpServiceService {

  constructor( private http:Http) { }
   
  getPostData(){
     return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1");
  }

  getUserData(){
    return  this.http.get("http://jsonplaceholder.typicode.com/users/1");
  }
    
}

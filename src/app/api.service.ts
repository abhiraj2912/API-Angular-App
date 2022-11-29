import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchPasseneger=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  fetchProduct=()=>{
    return this.http.get("https://dummyjson.com/products")
  }

  fetchPublicApi=()=>{
    return this.http.get("https://api.publicapis.org/entries")
  }

  fetchPublicData=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  fetchQuotes=()=>{
    return this.http.get("https://dummyjson.com/quotes")
  }

  fetchTodo=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchUserData=()=>{
    return this.http.get("https://dummyjson.com/users")
  }
  fetchUserInfo=()=>{
    return this.http.get("https://reqres.in/api/users?page=1")
  }
}

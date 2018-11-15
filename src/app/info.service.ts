import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization:
   'Bearer a4lXAw-J731ZPh0O6wWdwmCtfQcuDiBfnFQVNi64_CJ7LL3llZIU0RIUzqdKZvaZ2OKJhRxn9tJE8S3iUPtvMjYrLFKNvcWwDPQMOipYhxTGCs-ZGEC3Zl0LlOjqW3Yx'
})
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http: HttpClient) { }
  
  
  getPlaces(rest, amount, random):Observable<any> {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${rest}&price=${amount}&open_now=true&number=${random}`,
      httpOptions
    );
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  //httpClient obj injected
  constructor(private httpObj:HttpClient) 
  { }
  //make get request
  getUnknownData():Observable<any>
  {
   return this.httpObj.get<any>("https://imdb-api.com/en/API/Top250Movies/k_1aq9cdhz");
  }
}

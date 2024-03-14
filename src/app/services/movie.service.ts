import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interface/apiResponse';
import { Movie } from '../interface/movies';

@Injectable({
  providedIn: 'root'
})


// 1b2d5fb7
export class MovieService {


 private API_URL:string = "http://www.omdbapi.com/?apikey=1b2d5fb7";



  constructor(private http:HttpClient) { }


  getMovies(searchterm:string):Observable<Movie[]>{
   return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchterm}`).pipe(
    map(response=>{
      return response.Search;
    })
   );
  }
}

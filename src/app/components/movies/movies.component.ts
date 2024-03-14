import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, Subscription, debounceTime, distinct, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interface/movies';
import { MovieService } from 'src/app/services/movie.service';// Import the 'Movies' type from the appropriate file
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  movies: Movie[] = [];

  @ViewChild('movieSearchInput',{static:true}) movieSearchInput!: ElementRef;

  movies$!: Observable<Movie[]>;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movies$ =  fromEvent<Event>(this.movieSearchInput.nativeElement,'keyup').pipe(
      map((event:Event) => { //devuelve la informacion exacta que se necesite
        const searchTerm = (event.target as HTMLInputElement).value
        return searchTerm;
      }),
      filter((searchTerm:string)=>searchTerm.length>3 ),
      debounceTime(500), //me permite esperar un tiempo antes de ejecutar el siguente paso
      distinct(),
      switchMap((searchTerm:string)=>this.movieService.getMovies(searchTerm))
    )
  }
}

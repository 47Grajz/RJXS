import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.movie);
  }

  getPoster(){
    return this.movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450' : this.movie.Poster;
  }

}

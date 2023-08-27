import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popular: Array<IMovie> = [];
  topRatedMovies: Array<IMovie> = [];
  upcomingMovies: Array<IMovie> = [];
  constructor(private movieServices: MoviesService) {}
  ngOnInit(): void {
    this.movieServices.getMovies('popular').subscribe((response: any) => {
      this.popular = response;
      console.log(response.results);
    });
    this.movieServices.getMovies('upcoming').subscribe((response: any) => {
      this.upcomingMovies = response;
      console.log(response.results);
    });
    this.movieServices.getMovies('top_rated').subscribe((response: any) => {
      this.topRatedMovies = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/model/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movie: IMovie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.getMovies(1);
  }
  getMovies(page: number) {
    this.movieService.searchMovie(page).subscribe((movie: any) => {
      this.movie = movie;
      console.log(movie);
    });
  }
  paginate(event: any) {
    this.getMovies(event.page + 1);
  }
}

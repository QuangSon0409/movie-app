import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie, MovieVideo, MovieVideoDto } from 'src/app/model/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGE_SIZES } from '../../constants/image-size';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: IMovie | null = null;
  movieVideos: MovieVideo[] = [];
  imageSizes = IMAGE_SIZES;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.getMovie(id);
    this.getMovieVideos(id);
  }
  getMovie(id: number) {
    this.movieService.getMovieById(id).subscribe((data) => {
      this.movie = data;
      console.log(data);
    });
  }
  getMovieVideos(id: string) {
    this.movieService.getMovieVideo(id).subscribe((data) => {
      this.movieVideos = data;
      console.log(data);
    });
  }
}

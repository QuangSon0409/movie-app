import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IMovie, MovieDto, MovieVideoDto } from '../model/movie';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '6de10bf43797e06131eafa6b374b4a7f';
  constructor(private http: HttpClient) {}
  getMovies(key: string = 'upcoming') {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${key}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res: any) => {
          return of(res.results);
        })
      );
  }
  searchMovie(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res: any) => {
          return of(res.results);
        })
      );
  }
  getMovieById(id: any) {
    return this.http.get<IMovie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }
  getMovieVideo(id: string) {
    return this.http
      .get<any>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res: any) => {
          return of(res.results);
        })
      );
  }
}

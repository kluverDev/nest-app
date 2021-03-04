import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((m) => m.id === +id);
    if (!movie) {
      throw new NotFoundException(`movie with id ${id} not found.`);
    }
    return movie;
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((m) => m.id !== +id);
  }
  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
  update(id: string, updateData) {
    const movie = this.getOne(id);
    console.log(movie, 'movie before delete');
    this.deleteOne(id);
    console.log(this.movies);
    console.log(movie, 'movie after delete');

    this.movies.push({ ...movie, ...updateData });
    const newfile = { ...movie, ...updateData };
    console.log(newfile, 'newfile');
  }
}

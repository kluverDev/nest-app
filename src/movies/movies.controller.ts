import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') //this is more like localhost:3000/movies
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for this year ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.moviesService.getOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return this.moviesService.create(movieData);
  }
  //you need to call the body if you want the body of a request. same applies to the parameters

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }
}

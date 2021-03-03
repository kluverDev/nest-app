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

@Controller('movies') //this is more like localhost:3000/movies
export class MoviesController {
  @Get()
  getAll() {
    return `this is all movies`;
  }
  @Get('search')
  search(@Query("year") searchingYear: string) {
    return `we are searching for this year ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `this is all movies with the id ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }
  //you need to call the body if you want the body. same applies to the parameters

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this move all movies with the id ${id}`;
  }
}

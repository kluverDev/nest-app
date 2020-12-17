import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return `this is all movies`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this is all movies with the id ${id}`;
  }

  @Post()
  create() {
    return `create id`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `this move all movies with the id ${id}`;
  }
}

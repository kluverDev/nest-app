import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getAll', () => {
    it('should be an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'net 5',
        year: 20042,
        genres: ['action', 'kungfu'],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    });
    it('should throw a 404 error', () => {
      try {
        service.getOne(1555);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

import { Controller, Get, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PaginationDto, SearchDto } from './app.dto';
import { AppService } from './app.service';
import { paginationValidator, searchTracksValidator } from './app.validation';
import { IResponse } from './constants/constant';
import { ObjectValidationPipe } from './pipe/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getTest(): string {
    return 'test';
  }

  @Get('/artist/:id')
  async getArtist(@Param('id', ParseIntPipe) id: number, @Query(new ObjectValidationPipe(paginationValidator)) pg: PaginationDto): Promise<IResponse> {
    const data = await this.appService.getArtist(id, pg);
    return {
      status: HttpStatus.OK,
      message: 'success',
      data,
    };
  }

  @Get('/search')
  async searchTracks(@Query(new ObjectValidationPipe(searchTracksValidator)) pg: SearchDto): Promise<any> {
    const data = await this.appService.searchTracks(pg);
    return {
      status: HttpStatus.OK,
      message: 'success',
      data,
    };
  }


}

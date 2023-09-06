import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { PaginationDto, SearchDto } from './app.dto';
import { DEEZER_API_URL } from './constants/constant';
import { QuickHttpService } from './quick-http.service';

@Injectable()
export class AppService {
  constructor(private readonly httpService: QuickHttpService) {}



  async getArtist(id: number, pg: PaginationDto){
    try {
      const { page, limit } = pg;
      const topTracksResponse = await this.httpService.request(
        `${DEEZER_API_URL}/artist/${id}/top?index=${page}&limit=${limit}`,
        'get',
        null,
        null,
        null,
      );
      const albumsResponse = await this.httpService.request(
        `${DEEZER_API_URL}/artist/${id}/albums`,
        'get',
        null,
        null,
        null,
      );
      const artistResponse = await this.httpService.request(
        `${DEEZER_API_URL}/artist/${id}`,
        'get',
        null,
        null,
        null,
      );
      const relatedArtistsResponse = await this.httpService.request(
        `${DEEZER_API_URL}/artist/${id}/related`,
        'get',
        null,
        null,
        null,
      );
      return {
        topTracks: topTracksResponse[4],
        albums: albumsResponse[4],
        artist: artistResponse[4],
        relatedArtists: relatedArtistsResponse[4],
      };
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async searchTracks(data: SearchDto) {
    try {
      const { page, limit, query } = data;
      const response = await this.httpService.request(
        `${DEEZER_API_URL}/search/track?q=${query}&index=${page}&limit=${limit}`,
        'get',
        null,
        null,
        null,
      );
      return response[4];
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}

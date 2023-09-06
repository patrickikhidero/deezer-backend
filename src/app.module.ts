import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuickHttpService } from './quick-http.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, QuickHttpService],
})
export class AppModule {}

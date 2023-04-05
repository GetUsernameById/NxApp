import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../enviroments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

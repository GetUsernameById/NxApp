import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../enviroments/environment';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**.graphql'],
      context: ({ req }: { req: never }) => ({ req }),
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}

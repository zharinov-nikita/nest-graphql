import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PartnerModule } from '../partner';
import { AppResolver } from './app.resolver';
import { Link, LinkModule } from '../link';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'black-mirror-bot-database',
    }),
    PartnerModule,
    LinkModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}

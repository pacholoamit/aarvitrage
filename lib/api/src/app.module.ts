import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { ArbitrageModule } from './modules/arbitrage/arbitrage.module';
import { CcxtModule } from './modules/ccxt/ccxt.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/entities/schema.gql'),
    }),
    CcxtModule,
    // ArbitrageModule,
  ],
})
export class AppModule {}

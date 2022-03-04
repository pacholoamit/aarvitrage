import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CcxtMarket,
  EnumExchangeId,
  ExchangeIds,
} from 'src/entities/ccxt.entities';
import { CcxtService } from './ccxt.service';

@Resolver('Ccxt')
export class CcxtResolver {
  constructor(private readonly ccxtService: CcxtService) {}

  @Query(() => [EnumExchangeId])
  exchanges(): EnumExchangeId[] {
    return this.ccxtService.getAllExchanges();
  }

  @Query(() => [CcxtMarket])
  async markets(
    @Args('exchangeId', { type: () => EnumExchangeId })
    exchangeId: EnumExchangeId,
  ): Promise<CcxtMarket[]> {
    return await this.ccxtService.findAllMarketsByExchange(exchangeId);
  }

  //   @Query('coin')
  //   findOne(@Args('id') id: number) {
  //     return this.coinsService.findOne(id);
  //   }
}

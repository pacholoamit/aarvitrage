import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CcxtCurrency,
  CcxtMarket,
  EnumExchangeId,
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

  @Query(() => CcxtCurrency)
  async currencies(
    @Args('exchangeId', { type: () => EnumExchangeId })
    exchangeId: EnumExchangeId,
  ): Promise<CcxtCurrency> {
    return await this.ccxtService.findAllCurrenciesByExchange(exchangeId);
  }
}

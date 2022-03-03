import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CcxtService } from './ccxt.service';
// import { CreateCoinInput } from './dto/create-coin.input';

@Resolver('Ccxt')
export class CcxtResolver {
  constructor(private readonly ccxtService: CcxtService) {}

  @Query('exchanges')
  create() {
    return this.ccxtService.getAllExchanges();
  }

  //   @Query('coins')
  //   findAll() {
  //     return this.coinsService.findAll();
  //   }

  //   @Query('coin')
  //   findOne(@Args('id') id: number) {
  //     return this.coinsService.findOne(id);
  //   }
}

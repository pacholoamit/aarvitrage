import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CoinsService } from './coins.service';
import { CreateCoinInput } from './dto/create-coin.input';

@Resolver('Coin')
export class CoinsResolver {
  constructor(private readonly coinsService: CoinsService) {}

  @Mutation('createCoin')
  create(@Args('createCoinInput') createCoinInput: CreateCoinInput) {
    return this.coinsService.create(createCoinInput);
  }

  @Query('coins')
  findAll() {
    return this.coinsService.findAll();
  }

  @Query('coin')
  findOne(@Args('id') id: number) {
    return this.coinsService.findOne(id);
  }
}

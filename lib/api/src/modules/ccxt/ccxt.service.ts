import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import type { ExchangeId, Exchange } from 'ccxt';
import * as ccxt from 'ccxt';

@Injectable()
export class CcxtService {
  public getAllExchanges(): string[] {
    return ccxt.exchanges;
  }

  public async getAllMarkets(exchangeId: ExchangeId) {
    const exchange: Exchange = new ccxt[exchangeId]();

    if (exchange === undefined)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    const markets = await exchange.loadMarkets();
    return markets
  }
}

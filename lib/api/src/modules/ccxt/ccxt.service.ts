import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import type { ExchangeId, Exchange } from 'ccxt';
import * as ccxt from 'ccxt';

@Injectable()
export class CcxtService {
  public getAllExchanges() {
    return ccxt.exchanges;
  }

  public async findMarketByExchange(exchangeId: ExchangeId) {
    try {
      const exchange: Exchange = new ccxt[exchangeId]();
      const markets = await exchange.loadMarkets();
      return markets;
    } catch (err) {
      throw new HttpException('Exchange not found', HttpStatus.NOT_FOUND);
    }
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import type { ExchangeId, Exchange } from 'ccxt';
import * as ccxt from 'ccxt';

@Injectable()
export class CcxtService {
  public getAllExchanges() {
    return ccxt.exchanges;
  }

  public async findMarketsByExchange(exchangeId: ExchangeId) {
    try {
      const exchange: Exchange = new ccxt[exchangeId]();
      const markets = await exchange.fetchMarkets();
      return markets;
    } catch (err) {
      throw new HttpException(
        'Exchange not found / Market not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  public async findCurrenciesByExchange(exchangeId: ExchangeId) {
    try {
      const exchange: Exchange = new ccxt[exchangeId]();
      const currencies = await exchange.fetchCurrencies();
      if (currencies === undefined)
        throw new HttpException(
          'Exchange not found / Currency not found',
          HttpStatus.NOT_FOUND,
        );
      return currencies;
    } catch (err) {
      throw new HttpException(
        'Exchange not found / Currency not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}

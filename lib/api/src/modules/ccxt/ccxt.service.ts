import * as ccxt from 'ccxt';
import validateNotNull from 'src/utils/validateNotNull.util';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import type { Exchange } from 'ccxt';
import { CcxtDto } from './ccxt.dto';
import { runPromise } from 'src/utils';
import {
  CcxtMarket,
  EnumExchangeId,
  ExchangeIds,
} from 'src/entities/ccxt.entities';

@Injectable()
export class CcxtService {
  private readonly logger = new Logger(CcxtService.name);

  public getAllExchanges(): EnumExchangeId[] {
    this.logger.log('Exchanges fetched successfully');
    return ccxt.exchanges as unknown as EnumExchangeId[];
  }

  public async findAllMarketsByExchange(
    exchangeId: EnumExchangeId,
  ): Promise<CcxtMarket[]> {
    const exchange: Exchange = new ccxt[exchangeId]();
    const markets = await this.validateResponse(
      exchange.fetchMarkets(),
      `${exchangeId} markets`,
    );

    return markets;
  }

  public async findAllCurrenciesByExchange(exchangeId: EnumExchangeId) {
    const exchange: Exchange = new ccxt[exchangeId]();
    const currencies = await this.validateResponse(
      exchange.fetchCurrencies(),
      `${exchangeId} currency`,
    );

    return currencies;
  }

  public async findTickersByExchange({ exchangeId, tradePair }: CcxtDto) {
    const exchange = new ccxt[exchangeId]();
    const context = `${exchangeId} ${tradePair}`;

    const [tickers, error] = await runPromise(exchange.fetchTicker(tradePair));

    if (error) {
      this.logger.error(error);
    }

    this.logger.log(`${context} fetched succesfully`);

    return tickers as ccxt.Ticker;
  }

  private async validateResponse(promise: Promise<any>, ctx: string) {
    try {
      const resolve = await promise;
      validateNotNull(resolve, ctx);
      this.logger.log(`${ctx} fetched Successfully`);
      return resolve;
    } catch (err) {
      this.logger.error(err.message);
      throw new HttpException(
        `${ctx ?? 'value'} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { ExchangeId } from 'ccxt';
import { CcxtService } from '../ccxt/ccxt.service';
import { ArbitrageInfo } from './arbitrage.dto';

@Injectable()
export class ArbitrageService {
  constructor(private readonly ccxtService: CcxtService) {}
  private readonly logger = new Logger(ArbitrageService.name);

  public async getTradePairArbitrage(tradePair: string) {
    const { names } = this.ccxtService.getAllExchanges();

    const allPrices = names.map(
      async (exchangeId: ExchangeId): Promise<ArbitrageInfo> => {
        const ticker = await this.ccxtService.findTickersByExchange({
          exchangeId,
          tradePair,
        });
        const { symbol, last, timestamp } = ticker;
        return { exchangeId, tradePair: symbol, price: last, timestamp }; // Note: This only works for 1 trade pair for now
      },
    );

    // TODO: Optimize this
    const fulfilledPrices = (await Promise.allSettled(allPrices))
      .filter(({ status }) => status === 'fulfilled')
      .map((fulfilled) => <PromiseFulfilledResult<ArbitrageInfo>>fulfilled) // Assert type is Promise fulfilled to get value
      .map((fulfilled) => fulfilled.value)
      .filter(
        ({ price, timestamp }) =>
          price !== undefined && timestamp !== undefined,
      );

    this.logger.log(`${fulfilledPrices.length} ${tradePair} trade pairs.`);

    return fulfilledPrices;
  }
}

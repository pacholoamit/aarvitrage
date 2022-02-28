import { Injectable, Logger } from '@nestjs/common';
import { ExchangeId } from 'ccxt';
import { CcxtService } from '../ccxt/ccxt.service';

@Injectable()
export class ArbitrageService {
  constructor(private readonly ccxtService: CcxtService) {}
  private readonly logger = new Logger(ArbitrageService.name);

  public async getTradePairArbitrage(tradePair: string) {
    const exchanges = this.ccxtService.getAllExchanges();

    const allPrices = exchanges.map(async (exchangeId: ExchangeId) => {
      const ticker = await this.ccxtService.findTickersByExchange({
        exchangeId,
        tradePair,
      });
      const { symbol, last } = ticker;
      return { exchangeId, tradePair: symbol, price: last }; // Note: This only works for 1 trade pair for now
    });

    const fulfilledPrices = (await Promise.allSettled(allPrices))
      .filter(({ status }) => status === 'fulfilled')
      .map((fulfilled) => <PromiseFulfilledResult<any>>fulfilled) // Assert type is Promise fulfilled to get value
      .map((fulfilled) => fulfilled.value);

    this.logger.log(`${fulfilledPrices.length} ${tradePair} trade pairs.`);

    return fulfilledPrices;
  }
}

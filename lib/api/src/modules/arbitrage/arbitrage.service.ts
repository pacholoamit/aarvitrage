import { Injectable, Logger } from '@nestjs/common';
import { ExchangeId } from 'ccxt';
import { CcxtService } from '../ccxt/ccxt.service';

@Injectable()
export class ArbitrageService {
  constructor(private readonly ccxtService: CcxtService) {}
  private readonly logger = new Logger(ArbitrageService.name);

  public async getTradePairArbitrage(tradePair: string) {
    const exchanges = this.ccxtService.getAllExchanges();

    const getAllPrices = exchanges.map(async (exchangeId: ExchangeId) => {
      const ticker = await this.ccxtService.findTickersByExchange({
        exchangeId,
        tradePair,
      });
      const { symbol, last } = ticker;
      this.logger.log({ exchangeId, tradePair: symbol, price: last });
      return { exchangeId, tradePair: symbol, price: last }; // Note: This only works for 1 trade pair for now
    });

    const result = await Promise.allSettled(getAllPrices);
    return result;
  }
}

import * as ccxt from 'ccxt';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CcxtDto } from './ccxt.dto';
import { handlePromise } from 'src/utils';
@Injectable()
export class CcxtService {
  private readonly logger = new Logger(CcxtService.name);

  public getAllExchanges() {
    this.logger.log('Exchanges fetched successfully');
    return ccxt.exchanges;
  }

  public async findAllMarketsByExchange({
    exchangeId,
  }: CcxtDto): Promise<ccxt.Market[]> {
    const exchange = new ccxt[exchangeId]();
    const [markets, err] = await handlePromise(exchange.fetchMarkets());

    if (err || !markets) {
      this.logger.error('markets error: ' + err);
      throw new HttpException(
        'Market data not available',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return markets;
  }

  public async findAllCurrenciesByExchange({
    exchangeId,
  }: CcxtDto): Promise<ccxt.Dictionary<ccxt.Currency>> {
    const exchange = new ccxt[exchangeId]();
    const [currencies, err] = await handlePromise(exchange.fetchCurrencies());

    if (err || !currencies) {
      this.logger.error(err ?? 'currency error');
      throw new HttpException(
        'Currency data not available',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    this.logger.log(`${exchangeId} currencies returned`);

    return currencies;
  }

  public async findTickerByExchange({
    exchangeId,
    tradePair,
  }: CcxtDto): Promise<ccxt.Ticker> {
    const exchange = new ccxt[exchangeId]();
    const [ticker, err] = await handlePromise(exchange.fetchTicker(tradePair));

    if (err) {
      this.logger.error(err);
    }
    this.logger.log(`${exchangeId} ${tradePair} fetched succesfully`);

    return ticker;
  }
}

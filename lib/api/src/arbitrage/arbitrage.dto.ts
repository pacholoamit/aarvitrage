import * as ccxt from 'ccxt';

export interface ArbitrageInfo extends Pick<ccxt.Ticker, 'timestamp'> {
  exchangeId: ccxt.ExchangeId;
  tradePair: string;
  price: number;
}

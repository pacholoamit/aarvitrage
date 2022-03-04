import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import type { Currency, Market, MinMax } from 'ccxt';

export enum EnumExchangeId {
  aax = 'aax',
  ascendex = 'ascendex',
  bequant = 'bequant',
  bibox = 'bibox',
  bigone = 'bigone',
  binance = 'binance',
  binancecoinm = 'binancecoinm',
  binanceus = 'binanceus',
  binanceusdm = 'binanceusdm',
  bit2c = 'bit2c',
  bitbank = 'bitbank',
  bitbay = 'bitbay',
  bitbns = 'bitbns',
  bitcoincom = 'bitcoincom',
  bitfinex = 'bitfinex',
  bitfinex2 = 'bitfinex2',
  bitflyer = 'bitflyer',
  bitforex = 'bitforex',
  bitget = 'bitget',
  bithumb = 'bithumb',
  bitmart = 'bitmart',
  bitmex = 'bitmex',
  bitpanda = 'bitpanda',
  bitrue = 'bitrue',
  bitso = 'bitso',
  bitstamp = 'bitstamp',
  bitstamp1 = 'bitstamp1',
  bittrex = 'bittrex',
  bitvavo = 'bitvavo',
  bl3p = 'bl3p',
  blockchaincom = 'blockchaincom',
  btcalpha = 'btcalpha',
  btcbox = 'btcbox',
  btcmarkets = 'btcmarkets',
  btctradeua = 'btctradeua',
  btcturk = 'btcturk',
  buda = 'buda',
  bw = 'bw',
  bybit = 'bybit',
  bytetrade = 'bytetrade',
  cdax = 'cdax',
  cex = 'cex',
  coinbase = 'coinbase',
  coinbaseprime = 'coinbaseprime',
  coinbasepro = 'coinbasepro',
  coincheck = 'coincheck',
  coinex = 'coinex',
  coinfalcon = 'coinfalcon',
  coinmate = 'coinmate',
  coinone = 'coinone',
  coinspot = 'coinspot',
  crex24 = 'crex24',
  cryptocom = 'cryptocom',
  currencycom = 'currencycom',
  delta = 'delta',
  deribit = 'deribit',
  digifinex = 'digifinex',
  eqonex = 'eqonex',
  equos = 'equos',
  exmo = 'exmo',
  flowbtc = 'flowbtc',
  fmfwio = 'fmfwio',
  ftx = 'ftx',
  ftxus = 'ftxus',
  gateio = 'gateio',
  gemini = 'gemini',
  hitbtc = 'hitbtc',
  hitbtc3 = 'hitbtc3',
  hollaex = 'hollaex',
  huobi = 'huobi',
  huobijp = 'huobijp',
  huobipro = 'huobipro',
  idex = 'idex',
  independentreserve = 'independentreserve',
  indodax = 'indodax',
  itbit = 'itbit',
  kraken = 'kraken',
  kucoin = 'kucoin',
  kucoinfutures = 'kucoinfutures',
  kuna = 'kuna',
  latoken = 'latoken',
  lbank = 'lbank',
  liquid = 'liquid',
  luno = 'luno',
  lykke = 'lykke',
  mercado = 'mercado',
  mexc = 'mexc',
  ndax = 'ndax',
  novadax = 'novadax',
  oceanex = 'oceanex',
  okcoin = 'okcoin',
  okex = 'okex',
  okex5 = 'okex5',
  okx = 'okx',
  paymium = 'paymium',
  phemex = 'phemex',
  poloniex = 'poloniex',
  probit = 'probit',
  qtrade = 'qtrade',
  ripio = 'ripio',
  stex = 'stex',
  therock = 'therock',
  tidebit = 'tidebit',
  tidex = 'tidex',
  timex = 'timex',
  upbit = 'upbit',
  vcc = 'vcc',
  wavesexchange = 'wavesexchange',
  wazirx = 'wazirx',
  whitebit = 'whitebit',
  woo = 'woo',
  xena = 'xena',
  yobit = 'yobit',
  zaif = 'zaif',
  zb = 'zb',
  zipmex = 'zipmex',
  zonda = 'zonda',
}

@ObjectType()
export class ExchangeIds {
  @Field(() => [EnumExchangeId])
  names: EnumExchangeId[];
}

@ObjectType()
export class CcxtMarket implements Market {
  info: JSON; // Note: Not in schema
  @Field({ nullable: true })
  active?: boolean;
  @Field()
  base: string;
  @Field()
  baseId: string;
  @Field({ nullable: true })
  contract?: boolean;
  @Field(() => Float, { nullable: true })
  contractSize?: number;
  @Field(() => Float, { nullable: true })
  expiry?: number;
  @Field({ nullable: true })
  expiryDatetime?: string;
  @Field({ nullable: true })
  feeSide?: string;
  @Field({ nullable: true })
  future?: boolean;
  @Field()
  id: string;
  @Field({ nullable: true })
  inverse?: boolean;
  @Field({ nullable: true })
  linear?: boolean;
  @Field(() => Float, { nullable: true })
  maker?: number;
  @Field({ nullable: true })
  margin?: boolean;
  @Field({ nullable: true })
  option?: boolean;
  @Field({ nullable: true })
  optionType?: string;
  @Field({ nullable: true })
  percentage?: boolean;
  @Field()
  quote: string;
  @Field()
  quoteId: string;
  @Field({ nullable: true })
  settle?: string;
  @Field({ nullable: true })
  settleId?: string;
  @Field({ nullable: true })
  spot?: boolean;
  @Field(() => Float, { nullable: true })
  strike?: number;
  @Field({ nullable: true })
  swap?: boolean;
  @Field()
  symbol: string;
  @Field(() => Float, { nullable: true })
  taker?: number;
  @Field({ nullable: true })
  tierBased?: boolean;
  @Field({ nullable: true })
  type?: string;
  precision: { amount: number; price: number };
  limits: { amount?: MinMax; cost?: MinMax; leverage?: MinMax; price?: MinMax };
}

@ObjectType()
export class MarketPrecision {
  @Field(() => Float)
  amount: number;
  @Field(() => Float)
  price: number;
}

@ObjectType()
export class MarketLimit {
  @Field(() => Float, { nullable: true })
  amount?: MinMax;
  @Field(() => Float, { nullable: true })
  cost?: MinMax;
  @Field(() => Float, { nullable: true })
  leverage?: MinMax;
  @Field(() => Float, { nullable: true })
  price?: MinMax;
}

@ObjectType()
export class CcxtCurrency implements Currency {
  @Field({ nullable: true })
  code: string;
  @Field()
  id: string;
  @Field(() => Float, { nullable: true })
  numericId?: number;
  @Field(() => Float)
  precision: number;
}

registerEnumType(EnumExchangeId, {
  name: 'EnumExchangeId',
});

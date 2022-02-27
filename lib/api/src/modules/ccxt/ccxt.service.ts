import { Injectable } from '@nestjs/common';
import * as ccxt from 'ccxt';

@Injectable()
export class CcxtService {
  public getAllExchanges(): string[] {
    return ccxt.exchanges;
  }
}

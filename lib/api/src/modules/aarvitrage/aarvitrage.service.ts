import { Injectable } from '@nestjs/common';
import { CcxtService } from '../ccxt/ccxt.service';

@Injectable()
export class AarvitrageService {
  constructor(private readonly ccxtService: CcxtService) {}
  public getTradePairArbitrage(tradePair: string) {
    return 'trade-pair';
  }
}

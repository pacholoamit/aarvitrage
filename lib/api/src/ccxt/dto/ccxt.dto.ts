import { ExchangeId } from 'ccxt';
import { IsNotEmpty, IsString } from 'class-validator';

export class ExchangeIdDto {
  @IsNotEmpty()
  @IsString()
  exchangeId: ExchangeId;
}

export class findTickerByExchangeDto extends ExchangeIdDto {
  @IsNotEmpty()
  @IsString()
  tradePair: string;
}

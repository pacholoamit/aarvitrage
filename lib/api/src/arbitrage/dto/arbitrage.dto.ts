import { IsNotEmpty, IsString } from 'class-validator';

export class getTradePairArbitrageDto {
  @IsNotEmpty()
  @IsString()
  tradePair: string;
}

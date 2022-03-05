import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://aarvitrage:aarvitrage@postgres:5432/aarvitrage?schema=public',
        },
      },
    });
  }
}

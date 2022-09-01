import { Module } from '@nestjs/common';
import { ClubeService } from './clube.service';
import { ClubeGateway } from './clube.gateway';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ClubeGateway, ClubeService],
})
export class ClubeModule {}

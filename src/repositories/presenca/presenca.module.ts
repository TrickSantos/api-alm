import { Module } from '@nestjs/common';
import { PresencaService } from './presenca.service';
import { PresencaGateway } from './presenca.gateway';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PresencaGateway, PresencaService],
})
export class PresencaModule {}

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RepositoryModule } from 'repositories/repository.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        redis: {
          host: config.get('BULL_HOST'),
          port: config.get('BULL_PORT'),
          password: config.get('BULL_PASSWORD'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: 'evento',
    }),
    RepositoryModule,
    AuthModule,
  ],
})
export class AppModule {}

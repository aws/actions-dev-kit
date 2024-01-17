import { Module } from '@nestjs/common';
import { ConsoleLogger } from './logger';

@Module({
  providers: [ConsoleLogger],
  exports: [ConsoleLogger],
})
export class LoggerModule {}

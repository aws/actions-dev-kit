import { Module } from '@nestjs/common';
import { BootstrapModule } from './bootstrap/module';
import { LoggerModule } from './util/logger.module';
import { ValidationModule } from './validation/module';

@Module({
  imports: [ValidationModule, LoggerModule, BootstrapModule],
})
export class AppModule {}

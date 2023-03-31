import { ValidationModule } from './validation/module';
import { LoggerModule } from './util/logger.module';
import { BootstrapModule } from './bootstrap/module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ValidationModule,
        LoggerModule,
        BootstrapModule,
    ],
})
export class AppModule {
}

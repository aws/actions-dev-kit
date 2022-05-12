import { ValidationModule } from './validation/module';
import { LoggerModule } from './util/logger.module';
import { Module } from '@nestjs/common';


@Module({
    imports: [
        ValidationModule,
        LoggerModule,
    ],
})
export class AppModule {
}

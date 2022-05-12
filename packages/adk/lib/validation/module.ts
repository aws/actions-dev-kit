import { Module } from '@nestjs/common';
import { ValidationController } from './controller';
import { ActionValidationRules } from './rule';

@Module({
    imports: [],
    controllers: [ValidationController],
    providers: [ActionValidationRules],
})
export class ValidationModule {
  
}
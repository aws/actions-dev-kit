'use strict';

import { ActionValidationRules } from '../../lib/validation/rule';
import { FileStructureValidator } from '../../lib/validation/validator/structure';
import { JsonSchemaValidator } from '../../lib/validation/validator/schema';
import { ValidationController } from '../../lib/validation/controller';


describe('Validation Command Tests', () => {
    const rules = new ActionValidationRules(new JsonSchemaValidator(), new FileStructureValidator());
    const controller = new ValidationController(rules);
    it('should pass validation with validate schema', async () => {
        const file = `${__dirname}/valid_input.yml`;
        expect(controller.validateAction({ file: file })).toBe(0);
    });

    it('should fail validation with invalidate schema', async () => {
        const file = `${__dirname}/invalid_input.yml`;
        expect(controller.validateAction({ file: file })).toBe(1);
    });

    it('should fail validation without path', async () => {
        expect(controller.validateAction({ })).toBe(1);
    });
});

'use strict';

import chalk from 'chalk';
import { productName } from '../../lib/util/product';
import { ConsoleLogger } from '../../lib/util/logger';

const mockChalk: jest.Mocked<typeof chalk> = <jest.Mocked<typeof chalk>>chalk;
jest.mock('chalk', () => ({
    green: jest.fn(),
    red: jest.fn(),
    yellow: jest.fn(),
    white: jest.fn(),
}));

describe('@aws/codecatalyst-adk-utils', () => {

    const log = new ConsoleLogger();

    it('test product', () => {
        expect('codecatalyst' === productName()).toBeTruthy();
    });

    it('test chalk', () => {
        mockChalk.green.mockReturnValueOnce('test-green');
        mockChalk.red.mockReturnValueOnce('test-red');
        mockChalk.yellow.mockReturnValueOnce('test-yellow');

        log.log('info');
        expect(chalk.green).toHaveBeenCalledWith('info');

        log.error('error');
        expect(chalk.red).toHaveBeenCalledWith('error');

        log.warn('warn');
        expect(chalk.yellow).toHaveBeenCalledWith('warn');

        log.debug!('debug');
        expect(chalk.green).toHaveBeenCalledWith('debug');

        log.verbose!('verbose');
        expect(chalk.green).toHaveBeenCalledWith('verbose');
    });

});
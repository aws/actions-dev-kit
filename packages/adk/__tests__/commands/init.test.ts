'use strict';

import { handleCommand } from '../../lib/commands/init';
import { ProductInfo } from '../../lib/types/types'

describe('Init Command Tests', () => {
  it('run basic test as disconnected false', async () => {
    const productInfo : ProductInfo = {
      organization: 'test',
      project: 'test',
      repository: 'test'
    };

    const resp = await handleCommand(productInfo, false);

    expect(resp).toBe(0);
  });

  it('run basic test as disconnected true', async () => {
    const productInfo : ProductInfo = {
      organization: 'test',
      project: 'test',
      repository: 'test'
    };

    const resp = await handleCommand(productInfo, true);
    expect(resp).toBe(0);
  });
});

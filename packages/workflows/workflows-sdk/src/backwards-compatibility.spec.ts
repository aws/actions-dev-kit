/* eslint-disable quotes */
/* eslint import/no-extraneous-dependencies: 0 */
/**
 * Pulled in via tarball import from the package.json
 */
import * as baseline from 'old-model-baseline';
import * as currentTypes from './generated/workflow/Workflow';

describe('backwards compabitility type assignment', () => {
  it('Should built', () => {
    const compabitilityCheck = (
      // eslint-disable-next-line comma-dangle
      newModel: currentTypes.Workflow,
    ): baseline.Workflow => newModel;

    /**
     * this is so that we dont get thrown unused variable errors and typescript doesn't optimize this check away
     */
    if (compabitilityCheck.name) {
      expect(1).toBe(1);
    } else {
      expect(1).toBe(1);
    }
  });
});

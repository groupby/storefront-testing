import { expect } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import wallaby from '../../src/wallaby';

describe('wallaby()', () => {
  it('should call chai.use()', () => {
    const use = sinon.spy();

    wallaby(<any>{ use });

    expect(use).to.be.calledWith(sinonChai);
  });
});

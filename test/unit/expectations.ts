import { expect } from 'chai';
import expectations from '../../src/expectations';

describe('expectations()', () => {
  it('should be a function', () => {
    expect(expectations).to.be.a('function');
  });
});

import { expect } from 'chai';
import * as pkg from '../../src';
import bootstrap from '../../src/bootstrap';
import Suite from '../../src/suite';
import wallaby from '../../src/wallaby';

describe('package', () => {
  it('should expose Suite', () => {
    expect(pkg.Suite).to.eq(Suite);
  });

  it('should expose bootstrap()', () => {
    expect(pkg.bootstrap).to.eq(bootstrap);
  });

  it('should expose wallaby()', () => {
    expect(pkg.wallaby).to.eq(wallaby);
  });
});

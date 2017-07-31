import * as chai from 'chai';
import Suite from '../../src/suite';

describe('Suite', () => {
  describe('extendable()', () => {
    Suite.extendable((_) => _)(chai)('dummy tests', ({ expect }) => {
      describe('inner describe', () => {
        it('should be ok', () => {
          expect('a').to.be.ok;
        });
      });
    });
  });

  describe('base()', () => {
    it('should be a function', () => {
      chai.expect(Suite.base).to.be.a('function');
    });
  });
});

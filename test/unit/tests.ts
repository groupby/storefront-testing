import { expect } from 'chai';
import tests from '../../src/tests';

const TAG_DESCRIPTION = Symbol.for('tag_description');

describe('tests()', () => {
  it('should be a function', () => {
    expect(tests).to.be.a('function');
  });

  const primed = tests(<any>{ expect });

  describe('itShouldBeConfigurable', () => {
    primed.itShouldBeConfigurable(<any>{ [TAG_DESCRIPTION]: { metadata: { configurable: true } } });
  });

  describe('itShouldHaveAlias', () => {
    const alias = 'myAlias';

    primed.itShouldHaveAlias(<any>{ [TAG_DESCRIPTION]: { metadata: { alias } } }, alias);
  });
});

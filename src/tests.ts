import Suite from './suite';

export default ({ expect }: Suite.Utils) => ({
  itShouldBeConfigurable: (clazz) => {
    describe('@configurable', () => {
      it('should set configurable to be true', () => {
        expect(clazz[Symbol.for('tag_description')].metadata.configurable).to.be.true;
      });
    });
  },

  itShouldHaveAlias: (clazz, expectedValue) => {
    describe('@alias', () => {
      it('should set alias', () => {
        expect(clazz[Symbol.for('tag_description')].metadata.alias).to.eq(expectedValue);
      });
    });
  }
});

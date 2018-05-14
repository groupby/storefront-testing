import Suite from './suite';

export default ({ expect }: Suite.Utils): Tests => ({
  itShouldBeConfigurable: (clazz) => {
    describe('@configurable', () => {
      it('should set configurable to be true', () => {
        expect(clazz[Symbol.for('tag_description')].metadata.configurable).to.be.true;
      });
    });
  },

  itShouldProvideAlias: (clazz, aliasName) => {
    describe('@provide', () => {
      it('should provide alias', () => {
        expect(clazz[Symbol.for('tag_description')].metadata.provides).to.have.ownProperty(aliasName);
      });
    });
  },

  itShouldConsumeAlias: (clazz, aliasName) => {
    describe('@consume', () => {
      it('should consume alias', () => {
        expect(clazz[Symbol.for('tag_description')].metadata.consumes).to.include(aliasName);
      });
    });
  }
});

export interface Tests {
  itShouldBeConfigurable(clazz: { new(): any }): void;
  itShouldProvideAlias(clazz: { new(): any }, aliasName: string): void;
  itShouldConsumeAlias(clazz: { new(): any }, aliasName: string): void;
}

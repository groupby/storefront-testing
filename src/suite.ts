import expectations, { Expectations } from './expectations';
import tests, { Tests } from './tests';
import { sinon, suite, Chai } from './utils';

namespace Suite {
  export interface Utils {
    sinon: sinon.SinonStatic;
    expect: Chai.ExpectStatic;
    spy: sinon.SinonSpyStatic;
    stub: sinon.SinonStubStatic;
  }

  export type FullUtils = Expectations & Tests & Utils;

  export const extendable = <T extends FullUtils>(extend: (utils: FullUtils) => T) => (chai: Chai.ChaiStatic) =>
    suite<T, any>((userTests) => {
      let sandbox: sinon.SinonSandbox;

      beforeEach(() => (sandbox = sinon.createSandbox()));
      afterEach(() => sandbox.restore());

      const utils = {
        sinon,
        expect: chai.expect,
        spy: (...args) => (<any>sandbox.spy)(...args),
        stub: (...args) => (<any>sandbox.stub)(...args),
      };

      userTests(
        extend({
          ...utils,
          ...expectations(utils),
          ...tests(utils),
        })
      );
    });

  export const base = Suite.extendable((_) => _);
}

export default Suite;

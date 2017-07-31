import expectations from './expectations';
import tests from './tests';
import { sinon, suite, Chai } from './utils';

namespace Suite {
  export interface Utils {
    expect: Chai.ExpectStatic;
    spy: sinon.SinonSpyStatic;
    stub: sinon.SinonStubStatic;
  }

  export const extendable = <T extends Utils>(extend: (utils: any) => T) =>
    (chai: Chai.ChaiStatic) =>
      suite<T, any>((userTests) => {
        let sandbox: sinon.SinonSandbox;

        beforeEach(() => sandbox = sinon.sandbox.create());
        afterEach(() => sandbox.restore());

        const utils = {
          expect: chai.expect,
          spy: (...args) => (<any>sandbox.spy)(...args),
          stub: (...args) => (<any>sandbox.stub)(...args),
        };

        userTests(extend({
          ...utils,
          ...expectations(utils),
          ...tests(utils)
        }));
      });

  export const base = Suite.extendable((_) => _);
}

export default Suite;

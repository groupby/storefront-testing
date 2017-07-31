import { expect } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import bootstrap from '../../src/bootstrap';
import * as utils from '../../src/utils';

describe('bootstrap()', () => {
  it('should call chai.use()', () => {
    const use = sinon.spy();

    bootstrap(<any>{ use }, '');

    expect(use).to.be.calledWith(sinonChai);
  });

  it('should mock all file references', () => {
    const basedir = '/my/directory';
    const mock = sinon.stub(utils, 'mock');

    bootstrap(<any>{ use: () => null }, basedir, ['path/one', 'path/two']);

    expect(mock).to.be.calledTwice
      .and.calledWith('/my/directory/path/one')
      .and.calledWith('/my/directory/path/two');
  });
});

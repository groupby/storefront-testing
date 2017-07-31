import * as path from 'path';
import { mock, sinonChai, Chai } from './utils';

export default (chai: Chai.ChaiStatic, dirname: string, filesToMock: string[] = []) => {
  chai.use(sinonChai);

  filesToMock.forEach((file) => mock(path.join(dirname, file), {}));
};

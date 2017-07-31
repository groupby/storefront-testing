import { sinonChai, Chai } from './utils';

export default (chai: Chai.ChaiStatic) => chai.use(sinonChai);

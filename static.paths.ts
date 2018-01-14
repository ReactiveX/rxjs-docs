import { ALL_OPERATORS, OperatorDoc } from './src/operator-docs/index';
import { join } from 'path';

export const ROUTES = ['/', '/companies', '/team', '/operators'].concat(
  ALL_OPERATORS.map((op: OperatorDoc) => join('/operators', op.name))
);

import { OperatorDoc } from '../../operator-docs';

import { COMBINATION_OPERATORS } from './combination';
import { CREATION_OPERATORS } from './creation';
import { FILTERING_OPERATORS } from './filtering';
import { TRANSFORMATION_OPERATORS } from './transformation';
import { UTILITY_OPERATORS } from './utility';

export const ALL_OPERATORS_RU: OperatorDoc[] = [
  ...COMBINATION_OPERATORS,
  ...CREATION_OPERATORS,
  ...FILTERING_OPERATORS,
  ...TRANSFORMATION_OPERATORS,
  ...UTILITY_OPERATORS
];

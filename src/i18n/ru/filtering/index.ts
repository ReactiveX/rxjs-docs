import { debounce } from './debounce';
import { distinctUntilChanged } from './distinctUntilChanged';
import { sample } from './sample';
import { skip } from './skip';
import { skipWhile } from './skipWhile';

export const FILTERING_OPERATORS = [
  debounce,
  distinctUntilChanged,
  sample,
  skip,
  skipWhile
];

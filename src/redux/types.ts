import { CALCULATOR_NAMESPACE_KEY, ICalculatorState } from './modules/calculator/types';

export interface IStoreShape {
  [CALCULATOR_NAMESPACE_KEY]: ICalculatorState;
}

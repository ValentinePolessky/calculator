import { combineReducers, createStore } from 'redux';

import { CALCULATOR_NAMESPACE_KEY, StoreShapeNamespace } from './modules/calculator/types';
import { calculatorReducer } from './modules/calculator/reducer';

export const rootReducer = combineReducers({
  [CALCULATOR_NAMESPACE_KEY as StoreShapeNamespace]: calculatorReducer,
});

export const store = createStore(rootReducer);

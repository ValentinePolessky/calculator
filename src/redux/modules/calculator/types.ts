export const RESET = 'RESET';
export const CALCULATE = 'CALCULATE';
export const UPDATE_CALCULATE_STRING = 'UPDATE_CALCULATE_STRING';

interface UpdateCalculationStringAction {
    type: typeof UPDATE_CALCULATE_STRING
    payload: string
}

interface ResetAction {
    type: typeof RESET
}

interface CalculateAction {
    type: typeof CALCULATE
}

export interface ICalculatorState {
    calculatedString: string,
    isCalculated: boolean
}

export type StoreShapeNamespace = "calculator";

export const CALCULATOR_NAMESPACE_KEY = "calculator" as StoreShapeNamespace;

export type CalculatorActionTypes = UpdateCalculationStringAction | ResetAction | CalculateAction
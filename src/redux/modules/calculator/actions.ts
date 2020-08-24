import {CALCULATE, CalculatorActionTypes, RESET, UPDATE_CALCULATE_STRING} from './types';

export function reset(): CalculatorActionTypes {
    return {
        type: RESET
    }
}

export function calculate(): CalculatorActionTypes {
    return {
        type: CALCULATE
    }
}

export function updateCalculationString(newSymbol: string): CalculatorActionTypes {
    return {
        type: UPDATE_CALCULATE_STRING,
        payload: newSymbol
    }
}
import {CALCULATE, CalculatorActionTypes, ICalculatorState, RESET, UPDATE_CALCULATE_STRING} from './types'
import parser from "../../../utils/parser";

const initialState: ICalculatorState = {
    calculatedString: '',
    isCalculated: false
};

export function calculatorReducer(
    state = initialState,
    action: CalculatorActionTypes
): ICalculatorState {
    switch (action.type) {
        case RESET:
            return initialState;
        case UPDATE_CALCULATE_STRING:
            return {
                calculatedString: state.isCalculated ? action.payload : state.calculatedString + action.payload,
                isCalculated: false
            };
        case CALCULATE:
            let calculatedString;
            try {
                calculatedString = `${parser.parse(state.calculatedString) || ""}`
            } catch (e) {
                calculatedString = 'error';
            }
            return {
                isCalculated: true,
                calculatedString,
            };
        default:
            return state
    }
}
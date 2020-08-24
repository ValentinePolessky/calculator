import jison from 'jison';
import calculator from './calculator.json';

const parser = new jison.Parser(calculator);

export default parser;

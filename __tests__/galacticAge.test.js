import { ageCalculator } from './../src/galacticAge.js';
import TestRunner from 'jest-runner';

describe('ageCalculator', () => {
    test('should determine if an input is a number', () => {
        let ageCalculatorTest = ageCalculator('apple');
        expect(ageCalculatorTest).toBe(false);
    });
    test('should determine whether an integer is a positive number greater than 0', () => {
        let ageCalculatorTest = ageCalculator(2);
        expect(ageCalculatorTest).toEqual(false);
    })
});
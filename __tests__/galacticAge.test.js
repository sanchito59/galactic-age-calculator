import { ageCalculator } from './../src/galacticAge.js';
import TestRunner from 'jest-runner';

describe('ageCalculator', () => {
    test('should determine if an input is a number', () => {
        let ageCalculatorTest = ageCalculator('apple');
        expect(ageCalculatorTest).toBe(false);
    });
});
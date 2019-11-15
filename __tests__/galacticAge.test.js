import { Age } from './../src/galacticAge.js'
// import { validAge } from './../src/galacticAge.js';
import TestRunner from 'jest-runner';

describe('validAge', () => {
    test('should determine if an input is a number', () => {
        let validAgeTest = new Age('apple');
        expect(validAgeTest.validAge()).toBe(false);
    });
    test('should determine whether an integer is a positive number greater than 0', () => {
        let validAgeTest = new Age(-2);
        expect(validAgeTest.validAge()).toEqual(false);
    });
});

describe('mercuryYears', () => {
    test('should convert user\'s Earth age in years to Mercury years', () => {
        let userAge = new Age(25);
        expect(userAge.mercuryYears()).toEqual("104.17");
    })
});
describe('venusYears', () => {
    test('should convert user\'s Earth age in years to Venus years', () => {
        let userAge = new Age(25);
        expect(userAge.venusYears()).toEqual("40.32");
    })
});
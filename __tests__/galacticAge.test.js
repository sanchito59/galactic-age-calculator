import { Age } from './../src/galacticAge.js'
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
    });
});

describe('venusYears', () => {
    test('should convert user\'s Earth age in years to Venus years', () => {
        let userAge = new Age(25);
        expect(userAge.venusYears()).toEqual("40.32");
    });
});

describe('martianYears', () => {
    test('should convert user\'s Earth age in years to Martian years', () => {
        let userAge = new Age(25);
        expect(userAge.martianYears()).toEqual("13.30");
    });
});

describe('jupiterYears', () => {
    test('should convert user\'s Earth age in years to Jupiter years', () => {
        let userAge = new Age(25);
        expect(userAge.jupiterYears()).toEqual("2.10");
    });
});

describe('lifeExpectancy', () => {
    test('should show how many years a user has left to live :(', () => {
        let lifeLeft = new Age(25);
        //79.6 - 25
        expect(lifeLeft.lifeExpectancy()).toEqual("54.60")
    })
});

describe('mercuryLifeExpectancy', () => {
    // test('should show how many years a user has left to live on Mercury', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.mercuryLifeExpectancy()).toEqual("-24.57");
    // });
    // test('should return how long the user has left to live', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.mercuryLifeExpectancy()).toEqual("-24.57");
    // });
    // test('should determine whether or not the user has outlived the averageLife expectancy', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.mercuryLifeExpectancy()).toEqual(true)
    // });
    test('should tell the user how long they\'ve been dead for if they have outlived the averageLife expectancy', () => {
        let lifeLeft = new Age(25);
        expect(lifeLeft.mercuryLifeExpectancy()).toEqual("We've been mourning you for 24.57 years!")
    });
    test('should tell the user how long they have left to live based on averageLife', () => {
        let lifeLeft = new Age(5);
        expect(lifeLeft.mercuryLifeExpectancy()).toEqual("58.77")
    });
});
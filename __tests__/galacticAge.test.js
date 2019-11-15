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
    // test('should determine whether or not the user has outlived the averageLife expectancy', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.mercuryLifeExpectancy()).toEqual(true)
    // });
    test('should tell the user how long they\'ve been dead for if they have outlived the averageLife expectancy', () => {
        let lifeLeft = new Age(25);
        expect(lifeLeft.mercuryLifeExpectancy()).toEqual("We've been mourning you for 24.57 years!")
    });
    // test('should tell the user how long they have left to live based on averageLife', () => {
    //     let lifeLeft = new Age(5);
    //     expect(lifeLeft.mercuryLifeExpectancy()).toEqual("58.77")
    // });
    test('should tell the user how long they have left to live in a statement', () => {
        let lifeLeft = new Age(5);
        expect(lifeLeft.mercuryLifeExpectancy()).toEqual("You have 58.77 years left to live on Mercury based on the average life expectancy in Oregon.")
    });
});

describe('venusLifeExpectancy', () => {
    // test('should show the user how many years they have left to live on Venus', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.venusLifeExpectancy()).toEqual("39.28");
    // });
    // test('should determine whether or not the user has outlived the averageLife', () => {
    //     let lifeLeft = new Age(50);
    //     expect(lifeLeft.venusLifeExpectancy()).toEqual(true);
    // });
    test('should tell the user how long they\'ve been dead for if they have outlived averageLife', () => {
        let lifeLeft = new Age(50);
        expect(lifeLeft.venusLifeExpectancy()).toEqual("We've been mourning you for 1.05 years!");
    });
    // test('should tell the user how long they have left to live based on averageLife', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.venusLifeExpectancy()).toEqual("39.28")
    // });
    test('should tell the user how long they have left to live in a statement', () => {
        let lifeLeft = new Age(25);
        expect(lifeLeft.venusLifeExpectancy()).toEqual("You have 39.28 years left to live on Venus based on the average life expectancy in Oregon.")
    });
});

describe('martianLifeExpectancy', () => {
    // test('should show the user how many years they have left to live on Mars', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.martianLifeExpectancy()).toEqual("66.30");
    // });
    //   test('should determine whether or not the user has outlived the averageLife', () => {
    //     let lifeLeft = new Age(200);
    //     expect(lifeLeft.martianLifeExpectancy()).toEqual(true);
    // });
    test('should tell the user how long they\'ve been dead for if they have outlived averageLife', () => {
        let lifeLeft = new Age(200);
        expect(lifeLeft.martianLifeExpectancy()).toEqual("We've been mourning you for 26.78 years!");
    });
    // test('should tell the user how long they have left to live based on averageLife', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.martianLifeExpectancy()).toEqual("66.30")
    // });
    test('should tell the user how long they have left to live in a statement', () => {
        let lifeLeft = new Age(25);
        expect(lifeLeft.martianLifeExpectancy()).toEqual("You have 66.30 years left to live on Mars based on the average life expectancy in Oregon.");
    });
});
describe('jupiterLifeExpectancy', () => {
    // test('should show the user how many years they have left to live on Jupiter', () => {
    //     let lifeLeft = new Age(25);
    //     expect(lifeLeft.jupiterLifeExpectancy()).toEqual("77.50");
    // });
    test('should determine whether or not the user has outlived the averageLife', () => {
        let lifeLeft = new Age(200);
        expect(lifeLeft.jupiterLifeExpectancy()).toEqual(true);
    });
});
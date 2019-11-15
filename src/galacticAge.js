export class Age {
    constructor(age) {
        this.age = age;
    }
    validAge() {
        const number = 5;
        if (typeof (this.age) !== typeof (number)) {
            return false;
        } else if (this.age < 1) {
            return false;
        }
    }
    mercuryYears() {
        const mercuryAge = (this.age / 0.24).toFixed(2);
        return mercuryAge;
    };
    venusYears() {
        const venusAge = (this.age / 0.62).toFixed(2);
        return venusAge;
    };
    martianYears() {
        const martianAge = (this.age / 1.88).toFixed(2);
        return martianAge;
    };
    jupiterYears() {
        const jupiterAge = (this.age / 11.88).toFixed(2);
        return jupiterAge;
    };
    lifeExpectancy() {
        const averageLife = 79.6;
        const lifeLeft = (averageLife - this.age).toFixed(2);
        return lifeLeft;
    };
    mercuryLifeExpectancy() {
        const averageLife = 79.6;
        const lifeLeft = (averageLife - (this.age / 0.24)).toFixed(2);
        if (lifeLeft <= 0) {
            return "We've been mourning you for " + Math.abs(lifeLeft) + " years!";
        } else if (lifeLeft > 0) {
            return "You have " + lifeLeft + " years left to live on Mercury based on the average life expectancy in Oregon.";
        }
    };
    venusLifeExpectancy() {
        const averageLife = 79.6;
        const lifeLeft = (averageLife - (this.age / 0.62)).toFixed(2);
        if (lifeLeft <= 0) {
            return "We've been mourning you for " + Math.abs(lifeLeft) + " years!";
        } else if (lifeLeft > 0) {
            return "You have " + lifeLeft + " years left to live on Venus based on the average life expectancy in Oregon.";
        }
    };
    martianLifeExpectancy(){
        
    }
};
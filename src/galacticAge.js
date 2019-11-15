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
        const mercuryAge = this.age / 0.24;
        return mercuryAge.toFixed(2);
    };
    venusYears() {
        const venusAge = this.age / 0.62;
        return venusAge.toFixed(2);
    };
    martianYears() {
        const martianAge = this.age / 1.88;
        return martianAge.toFixed(2);
    };
    jupiterYears() {
        const jupiterAge = this.age / 11.88;
        return jupiterAge.toFixed(2);
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
            return true;
        }
        // return lifeLeft;
    };
};
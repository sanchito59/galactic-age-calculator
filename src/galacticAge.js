export class Age {
    constructor(age) {
        this.age = age;
    }
    validAge() {
        let number = 5;
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
};
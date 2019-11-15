export class Age {
    constructor(mercuryYear, venusYear, marsYear, jupiterYear){
        this.mercuryYear = mercuryYear;
        this.venusYear = venusYear;
        this.marsYear = marsYear;
        this.jupiterYear = jupiterYear;
    }
}

export function ageCalculator(numInput){
    let number = 5;
    if(typeof(numInput) !== typeof(number)){
        return false;
    } else if (numInput < 1){
        return false;
    }
}
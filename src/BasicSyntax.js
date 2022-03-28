export function romanToInteger(str) {
    let result = 0;
    let currentDigit = romanToIntDigit(str[0]);
    for(let i=0;i<str.length;i++){
        let nextDigit = 0;
        
        if(i+1<str.length)
            nextDigit = romanToIntDigit(str[i+1]);

        if(nextDigit>currentDigit)
            currentDigit*=-1;

        result+=currentDigit;
        currentDigit = nextDigit;
    }
    return result;
}

function romanToIntDigit(digit){
    switch(digit){
        case "I": return 1;
        case "V": return 5;
        case "X": return 10;
        case "L": return 50;
        case "C": return 100;
        case "D": return 500;
        case "M": return 1000;
        default: return 0;
    }
}
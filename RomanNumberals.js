function romanNumberals(num) {
    let finalValArr = []
    tens = Math.floor(num/10);
    for (let i = 0; i < tens; i++) {
        finalValArr.push('X')
    }
    remainderAfterTens = num % 10;
    fives = Math.floor(remainderAfterTens/5);
    for (let i = 0; i < fives; i++) {
        finalValArr.push('V')
    }
    remainderAfterFives = remainderAfterTens % 5
    for (let i = 0; i < remainderAfterFives; i++) {
        finalValArr.push('I')
    }
    return finalValArr.join('')
};

console.log(romanNumberals(49));

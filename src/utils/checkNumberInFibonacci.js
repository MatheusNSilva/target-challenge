const checkNumberInFibonacci = (number) => {
    let isFibonacci = false;
    let lastNumberInSequence = 0, sumOfLastTwo = 1, temp;
    while (sumOfLastTwo <= number) {
        if (sumOfLastTwo === Number(number)) {
            isFibonacci = true;
            break;
        }
        
        temp = sumOfLastTwo;
        sumOfLastTwo = sumOfLastTwo + lastNumberInSequence;
        lastNumberInSequence = temp; 
    }
    return isFibonacci;
};

export default checkNumberInFibonacci;

const findLowestBillingAmountDay = (billingAmounts) => {
    let lowestBillingAmountDay = billingAmounts[0]?.valor;
    for (let i = 1; i < billingAmounts.length; i++) {
        if (billingAmounts[i]?.valor < lowestBillingAmountDay) {
            lowestBillingAmountDay = billingAmounts[i]?.valor;
        }
    }
    return lowestBillingAmountDay;
};

const finHighestBillingAmountDay = (billingAmounts) => {
    let highestBillingAmountDay = billingAmounts[0]?.valor;
    for (let i = 1; i < billingAmounts.length; i++) {
        if (billingAmounts[i]?.valor > highestBillingAmountDay) {
            highestBillingAmountDay = billingAmounts[i]?.valor;
        }
    }
    return highestBillingAmountDay;
};

const findAverageBillingAmountInMonth = (billingAmounts) => {
    let totalBillingAmount = 0;
    let totalValidDays = 0;
    for (let i = 0; i < billingAmounts.length; i++) {
        if (billingAmounts[i]?.valor > 0) {
            totalBillingAmount += billingAmounts[i]?.valor;
            totalValidDays++;
        }
    }
    return totalBillingAmount / totalValidDays;
};

const checkDayAboveAverage = (averageBilling, dayBilling) => {
    return dayBilling > averageBilling;
};

const findTotalDaysAboveAverage = (billingAmounts) => {
    const averageBillingAmount = findAverageBillingAmountInMonth(billingAmounts);
    let totalDaysAboveAverage = 0;
    for (let i = 0; i < billingAmounts.length; i++) {
        if (checkDayAboveAverage(averageBillingAmount, billingAmounts[i]?.valor)) {
            totalDaysAboveAverage++;
        }
    }
    return totalDaysAboveAverage;
};

const findTotalBillingAmount = (billingAmounts) => {
    let totalBillingAmount = 0;
    for (let i = 0; i < billingAmounts.length; i++) {
        totalBillingAmount += billingAmounts[i]?.billing;
    }
    return totalBillingAmount;
};

const findStateRepresentativeBillingAmount = (billingAmounts, state) => {
    let totalBillingAmount = findTotalBillingAmount(billingAmounts);
    const stateBilling = billingAmounts.find((stateBilling) => stateBilling.name === state);
    let stateBillingRepresentative = ((stateBilling?.billing / totalBillingAmount) * 100).toFixed(2);
    return stateBillingRepresentative;
};

export { findLowestBillingAmountDay, finHighestBillingAmountDay, findTotalDaysAboveAverage, findStateRepresentativeBillingAmount };
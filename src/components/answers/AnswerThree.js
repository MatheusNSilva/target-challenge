import React from 'react';
import billingAmount from '../../mock/dados.json';
import { 
    findLowestBillingAmountDay, 
    finHighestBillingAmountDay, 
    findTotalDaysAboveAverage 
} from '../../utils/billingHelper';

const AnswerThree = () => {
    const lowestBillingAmountDay = findLowestBillingAmountDay(billingAmount);
    const highestBillingAmountDay = finHighestBillingAmountDay(billingAmount);
    const numberOfDaysAboveAverage = findTotalDaysAboveAverage(billingAmount);
    return (
        <div>
            <h4>Exercício 3:</h4>
            <p>
                Sobre o faturamento de uma empresa, temos as seguintes informações:
                <br />
                O menor valor de faturamento do mês: {lowestBillingAmountDay}
                <br />
                O maior valor de faturamento do mês: {highestBillingAmountDay}
                <br />
                O número de dias em que o valor de faturamento diário foi superior à média mensal: {numberOfDaysAboveAverage}
            </p>
        </div>
    )
};

export default AnswerThree;

import React from 'react';
import billingAmount from '../../mock/dados.json';
import { 
    findLowestBillingAmountDay, 
    finHighestBillingAmountDay, 
    findTotalDaysAboveAverage 
} from '../../utils/billingHelper';
import { Typography } from '@mui/material';

const AnswerThree = () => {
    const lowestBillingAmountDay = findLowestBillingAmountDay(billingAmount);
    const highestBillingAmountDay = finHighestBillingAmountDay(billingAmount);
    const numberOfDaysAboveAverage = findTotalDaysAboveAverage(billingAmount);
    return (
        <div>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Sobre o faturamento de uma empresa, temos as seguintes informações:
            </Typography>
            <Typography variant="subtitle1">
                O menor valor de faturamento do mês: {lowestBillingAmountDay}
            </Typography>
            <Typography variant="subtitle1">    
                O maior valor de faturamento do mês: {highestBillingAmountDay}
            </Typography>
            <Typography>
                O número de dias em que o valor de faturamento diário foi superior à média mensal: {numberOfDaysAboveAverage}
            </Typography>
        </div>
    )
};

export default AnswerThree;

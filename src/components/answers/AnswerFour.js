import React from 'react';
import statesBillingAmount from '../../mock/stateBillingAmounts.json';
import { findStateRepresentativeBillingAmount } from '../../utils/billingHelper';
import { Typography } from '@mui/material';

const AnswerFour = () => {
    const states = statesBillingAmount.map((state) => state.name);
    return (
        <div>
            <Typography variant="subtitle1" sx={{ marginBottom: 2, fontWeight: 600 }}>Sobre o percentual de representação de cada estado no faturamento mensal de uma de uma distribuídora, temos as seguintes informações:</Typography>
            <Typography variant="subtitle1">
                O percentual de faturamento do estado de São Paulo: ${findStateRepresentativeBillingAmount(statesBillingAmount, 'SP')}% 
            </Typography>
            <Typography variant="subtitle1">    
                O percentual de faturamento do estado do Rio de Janeiro: ${findStateRepresentativeBillingAmount(statesBillingAmount, 'RJ')}% 
            </Typography>
            <Typography variant="subtitle1">
                O percentual de faturamento do estado de Minas Gerais: ${findStateRepresentativeBillingAmount(statesBillingAmount, 'MG')}% 
            </Typography>
            <Typography variant="subtitle1">
                O percentual de faturamento do estado do Espírito Santo: ${findStateRepresentativeBillingAmount(statesBillingAmount, 'ES')}% 
            </Typography>
            <Typography variant="subtitle1">
                O percentual de faturamento dos outros estados: ${findStateRepresentativeBillingAmount(statesBillingAmount, 'Outros')}% 
            </Typography>
        </div>
    );
};

export default AnswerFour;

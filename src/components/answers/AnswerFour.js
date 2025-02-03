import React from 'react';
import statesBillingAmount from '../../mock/stateBillingAmounts.json';
import { findStateRepresentativeBillingAmount } from '../../utils/billingHelper';

const AnswerFour = () => {
    const states = statesBillingAmount.map((state) => state.name);
    return (
        <div>
            <h4>Exercício 4:</h4>
            Sobre o percentual de representação de cada estado no faturamento mensal de uma de uma distribuídora, temos as seguintes informações:
            <br />
            {states.map((state, index) => (
                <>
                    <div key={index}>
                        {state !== 'Outros' ? 
                            `O percentual de faturamento do estado de ${state}: ${findStateRepresentativeBillingAmount(statesBillingAmount, state)}%` 
                            : `O percentual de faturamento dos outros estados: ${findStateRepresentativeBillingAmount(statesBillingAmount, state)}%`
                        }
                    </div>
                    <br />
                </>
            ))}
        </div>
    );
};

export default AnswerFour;

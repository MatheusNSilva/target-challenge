import React, { useState } from 'react';
import countInInterval from '../utils/countInInterval';
import checkNumberInFibonacci from '../utils/checkNumberInFibonacci';
import revertString from '../utils/revertString';
import { 
    findLowestBillingAmountDay,
    finHighestBillingAmountDay,
    findTotalDaysAboveAverage,
    findStateRepresentativeBillingAmount
} from '../utils/billingHelper';
import billingAmount from '../mock/dados.json';
import statesBillingAmount from '../mock/stateBillingAmounts.json';

const Answers = () => {
    const [isFibonacciNumber, setIsFibonacciNumber] = useState(null);
    const [revertedStr, setRevertedStr] = useState('');
    
    const AnsweOne = () => {
        const questionOneInterval = 13; 
        const quetionOneAnswer = countInInterval(questionOneInterval);
        return (
            <p>
                <h4>Exercício 1:</h4>
                <br />
                O valor da variável SOMA é: {quetionOneAnswer}
            </p>
        );
    };

    const AnswerTwo = () => {
        let isFibonacci = null;
        const checkFibonacciSequence = (numberToCheckInFibonacci) => {
            isFibonacci = checkNumberInFibonacci(numberToCheckInFibonacci);
        };

        const updateFibonacciNumberValidation = () => {
            setIsFibonacciNumber(isFibonacci);
        };

        return (
            <div>
                <h4>Exercício 2:</h4>
                <p>
                    Vamos verificar se um dado número inteiro está presente na sequência Fibonacci.
                    <br />
                    Insira o número:
                    <input type="number" onChange={(e) => checkFibonacciSequence(e.target.value)} />
                    <button onClick={() => updateFibonacciNumberValidation()}>Verificar</button>
                    <br />
                    {isFibonacciNumber !== null &&
                        <label>
                            {isFibonacciNumber ?
                                'O número está presente na sequência Fibonacci' : 
                                'O número não está presente na sequência Fibonacci'
                            }
                        </label>}
                </p>
            </div>
        );    
    };

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

    const AnswerFive = () => {
        let newStr = '';
        const handleRevertString = (stringToRevert) => {
            newStr = revertString(stringToRevert);
        };

        const updateRevertedStr = () => {
            setRevertedStr(newStr);
        };

        return (
            <p>
                <h4>Exercício 5:</h4>
                <span>Informe uma string que deseja inverter:</span>
                <br />
                <input type="text" onChange={(e) => handleRevertString(e.target.value)} />
                <button onClick={() => updateRevertedStr()}>Inverter</button>
                <br />
                <span>A string invertida é: {revertedStr}</span>
            </p>
        );
    };

    return (
        <div>
            <h2>Respostas</h2>
            <AnsweOne />
            <AnswerTwo />
            <AnswerThree />
            <AnswerFour />
            <AnswerFive />
        </div>
    )
};

export default Answers;
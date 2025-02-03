import React, { useState } from 'react';
import checkNumberInFibonacci from '../../utils/checkNumberInFibonacci';

const AnswerTwo = () => {
    const [isFibonacciNumber, setIsFibonacciNumber] = useState(null);
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

export default AnswerTwo;

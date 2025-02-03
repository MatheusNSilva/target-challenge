import React from 'react';
import countInInterval from '../../utils/countInInterval';
import { Typography } from '@mui/material';

const AnsweOne = () => {
    const questionOneInterval = 13; 
    const quetionOneAnswer = countInInterval(questionOneInterval);
    return (
        <div>
            <Typography variant="subtitle1">
                Temos que INDICE é uma constante, K e SOMA são váriaveis. De acordo<br/>
                com a condição do laço de repetição estabelecida no enunciado da questão:<br/>
                {"(Enquanto K < INDICE) "}as váriaveis serão incrementadas 13 vezes. Onde <br/>
                {"(K = K + 1)"}, assim a cada ciclo o K se auto incrementa em 1, ao final<br/>
                o valor de K será 13 e o valor de SOMA seráo somatório de {"(SOMA = SOMA + K)."}<br/>
                O valor final da variável SOMA é: {quetionOneAnswer}
            </Typography>
        </div>
    );
};

export default AnsweOne;
import React from 'react';
import countInInterval from '../../utils/countInInterval';
import { Typography } from '@mui/material';

const AnsweOne = () => {
    const questionOneInterval = 13; 
    const quetionOneAnswer = countInInterval(questionOneInterval);
    return (
        <div>
            <Typography variant="subtitle1">
                Temos que INDICE é uma constante, K e SOMA são váriaveis. De acordo
                com a condição do laço de repetição estabelecida no enunciado da questão:
                {"(Enquanto K < INDICE) "}as váriaveis serão incrementadas 13 vezes. Onde 
                {"(K = K + 1)"}, assim a cada ciclo o K se auto incrementa em 1, ao final
                o valor de K será 13 e o valor de SOMA seráo somatório de {"(SOMA = SOMA + K)."}
            </Typography>
            <Typography sx={{ marginTop: 2}} variant="subtitle1">O valor final da variável SOMA é: {quetionOneAnswer}</Typography>
        </div>
    );
};

export default AnsweOne;
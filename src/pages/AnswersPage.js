import React, { useState } from 'react';
import { ExpansableCard, PageContainer } from '../styles';
import { Typography } from '@mui/material';
import { 
    AnswerOne,
    AnswerTwo,
    AnswerThree,
    AnswerFour, 
    AnswerFive 
} from '../components/answers';

const AnswersPage = () => {
    return (
        <PageContainer sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}>
            <Typography variant='h5'>Respostas</Typography>
            <ExpansableCard title="Exercício 1">
                <AnswerOne />
            </ExpansableCard>
            <ExpansableCard title="Exercício 2">
                <AnswerTwo />
            </ExpansableCard>
            <ExpansableCard title="Exercício 3">
                <AnswerThree />
            </ExpansableCard>
            <ExpansableCard title="Exercício 4">
                <AnswerFour />
            </ExpansableCard>
            <ExpansableCard title="Exercício 5">
                <AnswerFive />
            </ExpansableCard>
        </PageContainer>
    )
};

export default AnswersPage;

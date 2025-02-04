import React from 'react';
import { ExpansableCard, PageContainer } from '../styles';
import { Typography, Box } from '@mui/material';
import { TaskAlt } from '@mui/icons-material';
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
            <Box display="flex" alignItems="center" mb={3}>
                <Typography style={{ fontWeight: 600, paddingRight: 8, color: "#f57320" }} variant='h5'>Respostas</Typography>
                <TaskAlt sx={{ mr: 1, color: "#f57320" }} />
            </Box>
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

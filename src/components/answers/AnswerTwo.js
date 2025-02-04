import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
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
        <Box display="flex" flexDirection="column" mb={3}>
            <Typography variant="subtitle1">Vamos verificar se um dado número inteiro está presente na sequência Fibonacci.</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Escolha um número, vamos verificar:</Typography>
            <div style={{ marginBottom: 15 }} >
            <TextField 
                label="Digite o número" 
                variant="outlined" 
                type="number" 
                size='small'
                sx={{ marginRight: 1 }}
                onChange={(e) => checkFibonacciSequence(e.target.value)} />
            <Button 
                variant="contained" 
                size="medium" 
                onClick={() => updateFibonacciNumberValidation()}
            >        
                Verificar
            </Button>
            </div>
            {isFibonacciNumber !== null &&
                <Typography
                    sx={{
                        width: '74%',
                        color: 'white',
                        backgroundColor: isFibonacciNumber ? '#00CC00' : '#FF3333',
                        padding: '8px',
                        borderRadius: '4px',
                    }}
                >
                    {isFibonacciNumber ?
                        'O número está presente na sequência Fibonacci' : 
                        'O número não está presente na sequência Fibonacci'
                    }
                </Typography>}
        </Box>
    );    
};

export default AnswerTwo;

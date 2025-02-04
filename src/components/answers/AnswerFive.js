import React, { useState } from "react";
import revertString from "../../utils/revertString";
import { Typography, TextField, Button } from "@mui/material";

const AnswerFive = () => {
    const [revertedStr, setRevertedStr] = useState('');
    
    let newStr = '';
    
    const handleRevertString = (stringToRevert) => {
        newStr = revertString(stringToRevert);
    };

    const updateRevertedStr = () => {
        setRevertedStr(newStr);
    };

    return (
        <div>
            <Typography variant="subtitle1">Neste campo é possível inverter qualquer String.</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Escolha uma String, vamos ver como ela fica invertida:</Typography>
            <TextField  
                label="Digite uma String" 
                variant="outlined" 
                size='small'
                sx={{ marginRight: 1 }}
                onChange={(e) => handleRevertString(e.target.value)} />
            <Button 
                variant="contained" 
                size="medium"
                sx={{ mb: 2 }}
                onClick={() => updateRevertedStr()}
            >
                Inverter
            </Button>
            {revertedStr !== "" && 
                <Typography 
                    sx={{
                        width: '74%',
                        color: 'white',
                        backgroundColor: '#00CC00',
                        padding: '8px',
                        borderRadius: '4px',
                    }}
                >
                    A string invertida é: {revertedStr}
                </Typography>
            }
        </div>
    );
};

export default AnswerFive;

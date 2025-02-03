import React, { useState } from "react";
import revertString from "../../utils/revertString";

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
            <h4>Exercício 5:</h4>
            <span>Informe uma string que deseja inverter:</span>
            <br />
            <input type="text" onChange={(e) => handleRevertString(e.target.value)} />
            <button onClick={() => updateRevertedStr()}>Inverter</button>
            <br />
            <span>A string invertida é: {revertedStr}</span>
        </div>
    );
};

export default AnswerFive;

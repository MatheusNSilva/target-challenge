import React from 'react';
import { questions } from '../../mock/questions';

const Questions = () => {
    return (
        <>
            {questions.map((question, index) => (
                <div key={index}>
                    <h2>Exercício {question.number}</h2>
                    <p>{question.statement}</p>
                </div>
            ))}
        </>
    )
};

export default Questions;

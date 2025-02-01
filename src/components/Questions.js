import React from 'react';
import { questions } from '../mock/questions';

const Questions = () => {
    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <h2>Exercício {question.number}</h2>
                    <p>{question.statement}</p>
                </div>
            ))}
        </div>
    )
};

export default Questions;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizStart.css';

const QuizStart = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="quiz-start">
            <h1>Welcome to the Quiz!</h1>
            <p>Test your knowledge and challenge yourself!</p>
            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    );
};

export default QuizStart;
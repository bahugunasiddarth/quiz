import React from 'react';

const QuizSummary = ({ score, totalQuestions }) => {
    return (
        <div className="quiz-summary">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {totalQuestions}</p>
        </div>
    );
};

export default QuizSummary;
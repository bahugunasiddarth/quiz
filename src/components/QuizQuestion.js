import React, { useState, useEffect } from 'react';
import { fetchQuizData } from '../api';
import './QuizQuestion.css';

const QuizQuestion = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
    const [answerStatus, setAnswerStatus] = useState(null); // Track correctness of the answer

    useEffect(() => {
        const loadQuizData = async () => {
            try {
                const data = await fetchQuizData();
                setQuizData(data.questions); // Ensure the data structure matches the API response
            } catch (error) {
                console.error('Error loading quiz data:', error);
            }
        };
        loadQuizData();
    }, []);

    const handleAnswer = (option, isCorrect) => {
        setSelectedAnswer(option); // Set selected answer
        setAnswerStatus(isCorrect); // Set answer correctness

        if (isCorrect) {
            setScore(score + 1);
        }
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setTimeout(() => {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null); // Reset selected answer for the next question
                setAnswerStatus(null); // Reset answer status for the next question
            }, 1000); // Optional delay before moving to the next question
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="quiz-summary">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score} / {quizData.length}</p>
            </div>
        );
    }

    if (quizData.length === 0) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    const currentQuestionData = quizData[currentQuestion];

    return (
        <div className="quiz-question">
            <h2>{currentQuestionData.description}</h2>
            <ul>
                {currentQuestionData.options.map((option, index) => {
                    const isCorrect = option.is_correct;
                    const isSelected = selectedAnswer === option;
                    const answerClass = isSelected ? (isCorrect ? 'correct' : 'incorrect') : '';

                    return (
                        <li
                            key={index}
                            onClick={() => handleAnswer(option, isCorrect)}
                            className={answerClass}
                        >
                            {option.description}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuizQuestion;

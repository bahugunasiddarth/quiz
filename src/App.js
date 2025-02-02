import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizSummary from './components/QuizSummary';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<QuizStart />} />
                <Route path="/quiz" element={<QuizQuestion />} />
                <Route path="/summary" element={<QuizSummary />} />
            </Routes>
        </Router>
    );
};

export default App;
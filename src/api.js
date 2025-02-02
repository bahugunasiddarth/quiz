// import axios from 'axios';
import quizdata from './quizData.json';

// const API_URL = 'https://api.jsonserve.com/Uw5CrX#';

export const fetchQuizData = async () => {
    try {
        return quizdata
    } catch (error) {
        console.error('Error fetching quiz data:', error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new Error(`Server responded with status ${error.response.status}: ${error.response.data}`);
        } else if (error.request) {
            // The request was made but no response was received
            throw new Error('No response received from the server. Please check your internet connection.');
        } else {
            // Something happened in setting up the request that triggered an error
            throw new Error('Error setting up the request: ' + error.message);
        }
    }
};



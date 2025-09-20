
import React, { useState } from 'react';
import { FaCheck, FaTimes, FaArrowLeft, FaArrowRight, FaClock, FaStar, FaBookmark } from 'react-icons/fa';

const quizData = {
  frontend: [
    {
      id: 1,
      question: "What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM kept in memory",
        "A database for storing component data",
        "A styling framework for React",
        "A testing library"
      ],
      correct: 0,
      explanation: "The virtual DOM is a programming concept where a 'virtual' representation of the real DOM is kept in memory and synced with the real DOM through reconciliation."
    },
    {
      id: 2,
      question: "Which CSS property is used for responsive design?",
      options: [
        "display: flex",
        "media queries",
        "position: absolute",
        "z-index"
      ],
      correct: 1,
      explanation: "Media queries allow you to apply CSS styles based on device characteristics like screen width, making your design responsive."
    }
  ],
  backend: [
    {
      id: 1,
      question: "What is REST API?",
      options: [
        "A programming language",
        "An architectural style for web services",
        "A database management system",
        "A frontend framework"
      ],
      correct: 1,
      explanation: "REST (Representational State Transfer) is an architectural style that defines constraints for creating web services."
    }
  ]
};

const Quiz = ({ role, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes

  const questions = quizData[role?.id] || [];

  React.useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResults(true);
    }
  }, [timeRemaining, showResults]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <span className={`text-3xl font-bold ${
                score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {Math.round(score)}%
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600">
              You scored {Math.round(score)}% on the {role?.title} assessment
            </p>
          </div>

          {/* Answer Review */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Answer Review</h3>
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={question.id} className="border rounded-xl p-6 bg-gray-50">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {isCorrect ? <FaCheck /> : <FaTimes />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Question {index + 1}: {question.question}
                      </h4>
                      <div className="grid grid-cols-1 gap-2 mb-4">
                        {question.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg border ${
                              optIndex === question.correct
                                ? 'bg-green-50 border-green-300 text-green-800'
                                : optIndex === userAnswer && !isCorrect
                                ? 'bg-red-50 border-red-300 text-red-800'
                                : 'bg-white border-gray-200'
                            }`}
                          >
                            {option}
                            {optIndex === question.correct && (
                              <FaCheck className="inline ml-2 text-green-600" />
                            )}
                            {optIndex === userAnswer && !isCorrect && (
                              <FaTimes className="inline ml-2 text-red-600" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Training</span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl mb-6 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{role?.title} Assessment</h1>
            <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-600">
              <FaClock />
              <span className="font-bold">{formatTime(timeRemaining)}</span>
            </div>
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaArrowLeft />
              <span>Back</span>
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#ED1B2F] to-purple-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{currentQ?.question}</h2>
        
        <div className="space-y-3 mb-8">
          {currentQ?.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedAnswers[currentQ.id] === index
                  ? 'border-[#ED1B2F] bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQ.id}`}
                value={index}
                onChange={() => handleAnswerSelect(currentQ.id, index)}
                className="sr-only"
              />
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQ.id] === index
                    ? 'border-[#ED1B2F] bg-[#ED1B2F]'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQ.id] === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-gray-800">{option}</span>
              </div>
            </label>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>
          
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
            >
              <span>Next</span>
              <FaArrowRight />
            </button>
          ) : (
            <button
              onClick={() => setShowResults(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

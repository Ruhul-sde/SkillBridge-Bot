
import React, { useState } from 'react';
import { FaPlay, FaCheck, FaLightbulb, FaQuestionCircle, FaClock, FaStar } from 'react-icons/fa';

const TrainingModules = ({ role, onComplete, completedModules }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  const moduleData = {
    frontend: [
      { title: 'HTML5 Fundamentals', duration: '2 hours', difficulty: 'Beginner' },
      { title: 'CSS3 & Responsive Design', duration: '3 hours', difficulty: 'Beginner' },
      { title: 'JavaScript ES6+', duration: '4 hours', difficulty: 'Intermediate' },
      { title: 'React Fundamentals', duration: '5 hours', difficulty: 'Intermediate' },
      { title: 'State Management', duration: '3 hours', difficulty: 'Advanced' },
      { title: 'Testing & Debugging', duration: '2 hours', difficulty: 'Advanced' },
      { title: 'Performance Optimization', duration: '3 hours', difficulty: 'Advanced' },
      { title: 'Deployment Strategies', duration: '2 hours', difficulty: 'Advanced' }
    ],
    backend: [
      { title: 'Server Architecture', duration: '3 hours', difficulty: 'Beginner' },
      { title: 'Database Design', duration: '4 hours', difficulty: 'Intermediate' },
      { title: 'API Development', duration: '5 hours', difficulty: 'Intermediate' },
      { title: 'Authentication & Security', duration: '4 hours', difficulty: 'Advanced' },
      { title: 'Microservices', duration: '6 hours', difficulty: 'Advanced' },
      { title: 'Performance Tuning', duration: '3 hours', difficulty: 'Advanced' },
      { title: 'Monitoring & Logging', duration: '2 hours', difficulty: 'Advanced' },
      { title: 'Scalability Patterns', duration: '4 hours', difficulty: 'Expert' },
      { title: 'Cloud Integration', duration: '3 hours', difficulty: 'Expert' },
      { title: 'DevOps Practices', duration: '4 hours', difficulty: 'Expert' }
    ]
  };

  const questions = [
    {
      question: "What is the primary purpose of React hooks?",
      options: ["State management in functional components", "Class component inheritance", "DOM manipulation", "CSS styling"],
      correct: 0
    },
    {
      question: "Which HTTP method is idempotent?",
      options: ["POST", "PUT", "PATCH", "DELETE"],
      correct: 1
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correct: 1
    }
  ];

  const modules = moduleData[role.id] || moduleData.frontend;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleModuleClick = (index) => {
    setCurrentModule(index);
    setShowQuestions(true);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeModule();
    }
  };

  const completeModule = () => {
    if (!completedSteps.includes(currentModule)) {
      setCompletedSteps([...completedSteps, currentModule]);
      onComplete();
    }
    setShowQuestions(false);
  };

  if (showQuestions) {
    const question = questions[currentQuestion];
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {modules[currentModule].title} - Assessment
            </h2>
            <button
              onClick={() => setShowQuestions(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ← Back to Modules
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#ED1B2F] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-[#ED1B2F] mr-3" size={24} />
            <h3 className="text-xl font-semibold">{question.question}</h3>
          </div>
          
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion, index)}
                className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? 'border-[#ED1B2F] bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 text-sm">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-[#ED1B2F] text-white rounded-lg hover:bg-[#D1152A]"
            disabled={answers[currentQuestion] === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Module' : 'Next Question'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-800">{role.title} Training Path</h2>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#ED1B2F]">{completedModules}</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-600">{modules.length}</p>
              <p className="text-sm text-gray-600">Total Modules</p>
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          Complete these carefully designed modules to master your chosen career path.
        </p>
      </div>

      <div className="grid gap-6">
        {modules.map((module, index) => (
          <div key={index} className="group">
            <div className={`bg-gradient-to-r p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 ${
              completedSteps.includes(index)
                ? 'from-green-50 to-green-100 border-green-200'
                : 'from-gray-50 to-white border-gray-200 hover:border-[#ED1B2F] hover:shadow-xl'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    completedSteps.includes(index)
                      ? 'bg-green-500 text-white'
                      : 'bg-[#ED1B2F] text-white'
                  }`}>
                    {completedSteps.includes(index) ? <FaCheck /> : <FaPlay />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="mr-1" size={14} />
                        <span className="text-sm">{module.duration}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                        {module.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {completedSteps.includes(index) && (
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                  <button
                    onClick={() => handleModuleClick(index)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      completedSteps.includes(index)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#ED1B2F] text-white hover:bg-[#D1152A]'
                    }`}
                    disabled={index > 0 && !completedSteps.includes(index - 1) && !completedSteps.includes(index)}
                  >
                    {completedSteps.includes(index) ? 'Review' : 'Start Module'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingModules;

import React, { useState } from 'react';

const TrainingModules = ({ role, onComplete }) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [expandedDetails, setExpandedDetails] = useState(null);

  const trainingData = {
    Developer: [
      { title: 'Introduction to Agile Methodologies', description: 'Learn Scrum and Kanban in depth.' },
      { title: 'Code Review Process', description: 'Best practices for maintainable and scalable code.' },
      { title: 'Technical Skills Improvement', description: 'Master React, Node.js, and Docker.' },
      { title: 'Performance Optimization', description: 'Learn advanced optimization techniques for web apps.' },
      { title: 'DevOps Practices', description: 'Integrate CI/CD pipelines and automate deployments.' },
    ],
    HR: [
      { 
        title: 'Interviewing Techniques', 
        description: 'Master advanced candidate evaluation methods.', 
        details: 'This module covers behavioral questions, technical skill evaluation, and how to assess cultural fit.'
      },
      { 
        title: 'Onboarding Process', 
        description: 'Ensure seamless integration of new hires.', 
        details: 'This includes orientation schedules, mentorship programs, and resource allocation for new employees.'
      },
      { title: 'Employee Relations', description: 'Foster a collaborative workplace environment.' },
      { title: 'Compliance Training', description: 'Learn about labor laws and company policies.' },
      { title: 'Conflict Resolution', description: 'Mediate and resolve workplace disputes effectively.' },
    ],
  };

  const handleMarkComplete = (index) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
      if (index === trainingData[role].length - 1) {
        onComplete();
      }
    }
  };

  const handleExpandDetails = (index) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  return (
    <div className="mt-6">
      <p className="font-semibold text-lg">{role} Training Modules:</p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {trainingData[role]?.map((module, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg ${
              completedSteps.includes(index) ? 'opacity-50' : ''
            }`}
          >
            <p className="font-medium text-[#ED1B2F]">{module.title}</p>
            <p className="text-sm text-gray-600 mt-2">{module.description}</p>
            {module.details && (
              <button
                className="mt-2 text-sm text-[#ED1B2F] underline hover:text-[#D1152A]"
                onClick={() => handleExpandDetails(index)}
              >
                {expandedDetails === index ? 'Hide Details' : 'Show Details'}
              </button>
            )}
            {expandedDetails === index && module.details && (
              <p className="mt-2 text-sm text-gray-500">{module.details}</p>
            )}
            <button
              className={`mt-3 text-sm text-white bg-[#ED1B2F] px-3 py-1 rounded hover:bg-[#D1152A] ${
                completedSteps.includes(index) || (index > 0 && !completedSteps.includes(index - 1))
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={() => handleMarkComplete(index)}
              disabled={
                completedSteps.includes(index) || (index > 0 && !completedSteps.includes(index - 1))
              }
            >
              {completedSteps.includes(index) ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingModules;

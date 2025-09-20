
import React, { useState } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import RoleSelection from '../components/RoleSelection';
import TrainingModules from '../components/TrainingModules';
import ProgressTracker from '../components/ProgressTracker';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const Chatbot = ({ selectedRole, onStartQuiz }) => {
  const [role, setRole] = useState(selectedRole);
  const [completedModules, setCompletedModules] = useState(0);
  const [totalModules, setTotalModules] = useState(selectedRole?.totalModules || 0);

  React.useEffect(() => {
    if (selectedRole) {
      setRole(selectedRole);
      setTotalModules(selectedRole.totalModules || 0);
    }
  }, [selectedRole]);

  const handleRoleSelect = (selectedRole, total) => {
    setRole(selectedRole);
    setTotalModules(total);
    setCompletedModules(0);
  };

  const handleModuleComplete = () => {
    if (completedModules < totalModules) {
      setCompletedModules(completedModules + 1);
    }
  };

  const handleBack = () => {
    setRole(null);
    setCompletedModules(0);
    setTotalModules(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!role ? (
        <div className="space-y-8">
          <WelcomeMessage />
          <RoleSelection onRoleSelect={handleRoleSelect} />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
            <button
              className="flex items-center space-x-2 text-[#ED1B2F] hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
              onClick={handleBack}
            >
              <FaArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaHome size={16} />
              <span className="text-sm">Dashboard / {role.title}</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TrainingModules
                role={role}
                onComplete={handleModuleComplete}
                completedModules={completedModules}
              />
            </div>
            <div className="lg:col-span-1 space-y-6">
              <ProgressTracker completedModules={completedModules} totalModules={totalModules} />
              
              {/* Assessment Button */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Ready for Assessment?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Test your knowledge with interactive quizzes and get detailed feedback on your answers.
                </p>
                <button
                  onClick={onStartQuiz}
                  className="w-full bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                  disabled={completedModules === 0}
                >
                  {completedModules === 0 ? 'Complete modules first' : 'Take Assessment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

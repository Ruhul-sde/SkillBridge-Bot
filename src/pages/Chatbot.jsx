
import React, { useState } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import RoleSelection from '../components/RoleSelection';
import TrainingModules from '../components/TrainingModules';
import ProgressTracker from '../components/ProgressTracker';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const Chatbot = () => {
  const [role, setRole] = useState(null);
  const [completedModules, setCompletedModules] = useState(0);
  const [totalModules, setTotalModules] = useState(0);

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
            <div className="lg:col-span-1">
              <ProgressTracker completedModules={completedModules} totalModules={totalModules} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import React, { useState } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import RoleSelection from '../components/RoleSelection';
import TrainingModules from '../components/TrainingModules';
import ProgressTracker from '../components/ProgressTracker';

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
    <div className="max-w-4xl mx-auto p-6">
      {!role ? (
        <>
          <WelcomeMessage />
          <RoleSelection onRoleSelect={handleRoleSelect} />
        </>
      ) : (
        <>
          <button
            className="text-sm text-[#ED1B2F] hover:underline mb-4"
            onClick={handleBack}
          >
            ← Back to Role Selection
          </button>
          <TrainingModules
            role={role}
            onComplete={handleModuleComplete}
            completedModules={completedModules}
          />
          <ProgressTracker completedModules={completedModules} totalModules={totalModules} />
        </>
      )}
    </div>
  );
};

export default Chatbot;

import React from 'react';

const ProgressTracker = ({ completedModules, totalModules }) => {
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-gray-600">Training Progress</p>
      <div className="w-full bg-gray-200 h-4 rounded-lg overflow-hidden mt-2">
        <div
          style={{ width: `${progressPercentage}%` }}
          className="bg-[#ED1B2F] h-full"
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        {completedModules} of {totalModules} modules completed.
      </p>
    </div>
  );
};

export default ProgressTracker;
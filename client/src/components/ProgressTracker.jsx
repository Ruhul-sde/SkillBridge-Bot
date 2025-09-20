
import React from 'react';
import { FaTrophy, FaFire, FaBullseye, FaClock } from 'react-icons/fa';

const ProgressTracker = ({ completedModules, totalModules }) => {
  const progressPercentage = (completedModules / totalModules) * 100;
  const isComplete = completedModules === totalModules;

  const getProgressColor = () => {
    if (progressPercentage >= 80) return 'from-green-400 to-green-600';
    if (progressPercentage >= 60) return 'from-blue-400 to-blue-600';
    if (progressPercentage >= 40) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaBullseye className="text-[#ED1B2F] mr-3" />
          Training Progress
        </h3>
        {isComplete && (
          <div className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full">
            <FaTrophy className="mr-2" />
            <span className="font-semibold">Completed!</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
          <span className="text-2xl font-bold text-[#ED1B2F]">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            style={{ width: `${progressPercentage}%` }}
            className={`bg-gradient-to-r ${getProgressColor()} h-full transition-all duration-500 ease-out rounded-full relative`}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Completed</p>
              <p className="text-2xl font-bold text-blue-700">{completedModules}</p>
            </div>
            <FaBullseye className="text-blue-500 text-2xl" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Remaining</p>
              <p className="text-2xl font-bold text-purple-700">{totalModules - completedModules}</p>
            </div>
            <FaClock className="text-purple-500 text-2xl" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Success Rate</p>
              <p className="text-2xl font-bold text-green-700">{completedModules > 0 ? '98%' : '0%'}</p>
            </div>
            <FaTrophy className="text-green-500 text-2xl" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">Streak</p>
              <p className="text-2xl font-bold text-orange-700">{completedModules}</p>
            </div>
            <FaFire className="text-orange-500 text-2xl" />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
        <p className="text-center text-gray-600">
          {isComplete 
            ? "🎉 Congratulations! You've completed all training modules!" 
            : `Keep going! ${totalModules - completedModules} more modules to complete your training path.`
          }
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;

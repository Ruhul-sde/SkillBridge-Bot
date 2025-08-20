
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import RoleSelection from './components/RoleSelection';
import TrainingModules from './components/TrainingModules';
import ProgressTracker from './components/ProgressTracker';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRole, setSelectedRole] = useState(null);
  const [completedModules, setCompletedModules] = useState(0);
  const [totalModules, setTotalModules] = useState(0);

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedRole(null);
    setCompletedModules(0);
    setTotalModules(0);
  };

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const navigateToTraining = () => {
    if (selectedRole) {
      setCurrentPage('training');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleRoleSelect = (role, total) => {
    setSelectedRole(role);
    setTotalModules(total);
    setCompletedModules(0);
    setCurrentPage('training');
  };

  const handleModuleComplete = () => {
    if (completedModules < totalModules) {
      setCompletedModules(completedModules + 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToDashboard={navigateToDashboard} />;
      case 'dashboard':
        return <DashboardPage onRoleSelect={handleRoleSelect} onNavigateToHome={navigateToHome} />;
      case 'training':
        return (
          <TrainingPage
            role={selectedRole}
            completedModules={completedModules}
            totalModules={totalModules}
            onModuleComplete={handleModuleComplete}
            onBack={() => setCurrentPage('dashboard')}
          />
        );
      default:
        return <HomePage onNavigateToDashboard={navigateToDashboard} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen flex flex-col">
      <Navbar 
        onLogoClick={navigateToHome} 
        currentPage={currentPage} 
        onNavigate={(pageId) => {
          switch(pageId) {
            case 'home':
              navigateToHome();
              break;
            case 'dashboard':
              navigateToDashboard();
              break;
            case 'training':
              navigateToTraining();
              break;
            default:
              navigateToHome();
          }
        }}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

// Homepage Component
const HomePage = ({ onNavigateToDashboard }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <WelcomeMessage />
      <div className="text-center mt-12">
        <button
          onClick={onNavigateToDashboard}
          className="bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border-2 border-transparent hover:border-purple-400"
        >
          🚀 Enter Learning Dashboard
        </button>
      </div>
    </div>
  );
};

// Dashboard Component
const DashboardPage = ({ onRoleSelect, onNavigateToHome }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="bg-gradient-to-br from-gray-800 via-purple-800 to-gray-800 rounded-3xl shadow-2xl p-8 mb-8 border border-purple-500/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white via-purple-200 to-red-200 bg-clip-text text-transparent">
                Learning Dashboard
              </h1>
              <p className="text-purple-200 text-xl">Choose your career path and start your professional journey</p>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-r from-[#ED1B2F] to-red-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm">Career Paths</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm">Modules</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-gradient-to-r from-red-900/50 to-purple-900/50 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <h3 className="font-bold text-red-200 text-lg">🧠 Personalized Learning</h3>
              <p className="text-sm text-red-100 mt-2">AI-powered curriculum tailored to your goals</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-violet-900/50 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h3 className="font-bold text-purple-200 text-lg">📊 Real-time Progress</h3>
              <p className="text-sm text-purple-100 mt-2">Track your advancement with detailed analytics</p>
            </div>
            <div className="bg-gradient-to-r from-violet-900/50 to-indigo-900/50 p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm">
              <h3 className="font-bold text-violet-200 text-lg">💼 Industry Projects</h3>
              <p className="text-sm text-violet-100 mt-2">Build portfolio with real-world applications</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-900/50 to-red-900/50 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
              <h3 className="font-bold text-indigo-200 text-lg">👨‍🏫 Expert Mentorship</h3>
              <p className="text-sm text-indigo-100 mt-2">Get guidance from industry professionals</p>
            </div>
          </div>
        </div>
      </div>
      
      <RoleSelection onRoleSelect={onRoleSelect} />
    </div>
  );
};

// Training Page Component
const TrainingPage = ({ role, completedModules, totalModules, onModuleComplete, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-purple-800 p-6 rounded-2xl shadow-xl mb-6 border border-purple-500/30">
        <button
          className="flex items-center space-x-3 text-white hover:bg-red-600 px-6 py-3 rounded-xl transition-all font-medium bg-[#ED1B2F] shadow-lg"
          onClick={onBack}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="flex items-center space-x-3 text-purple-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          </svg>
          <span className="text-sm font-medium">Dashboard / {role?.title}</span>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TrainingModules
            role={role}
            onComplete={onModuleComplete}
            completedModules={completedModules}
          />
        </div>
        <div className="lg:col-span-1">
          <ProgressTracker completedModules={completedModules} totalModules={totalModules} />
        </div>
      </div>
    </div>
  );
};

export default App;

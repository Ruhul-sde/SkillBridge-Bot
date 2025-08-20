
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
    <div className="bg-gray-50 min-h-screen flex flex-col">
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
          className="bg-gradient-to-r from-[#ED1B2F] to-[#D1152A] text-white px-8 py-4 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Enter Learning Dashboard
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
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Learning Dashboard</h1>
              <p className="text-gray-600 text-lg">Choose your career path and start your professional journey</p>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm">Career Paths</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Modules</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-200">
              <h3 className="font-semibold text-indigo-800">Personalized Learning</h3>
              <p className="text-sm text-indigo-600 mt-1">AI-powered curriculum tailored to your goals</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-200">
              <h3 className="font-semibold text-emerald-800">Real-time Progress</h3>
              <p className="text-sm text-emerald-600 mt-1">Track your advancement with detailed analytics</p>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-200">
              <h3 className="font-semibold text-amber-800">Industry Projects</h3>
              <p className="text-sm text-amber-600 mt-1">Build portfolio with real-world applications</p>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-200">
              <h3 className="font-semibold text-rose-800">Expert Mentorship</h3>
              <p className="text-sm text-rose-600 mt-1">Get guidance from industry professionals</p>
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
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-lg mb-6">
        <button
          className="flex items-center space-x-2 text-[#ED1B2F] hover:bg-red-50 px-4 py-2 rounded-lg transition-colors font-medium"
          onClick={onBack}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Dashboard</span>
        </button>
        <div className="flex items-center space-x-2 text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          </svg>
          <span className="text-sm">Dashboard / {role?.title}</span>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
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

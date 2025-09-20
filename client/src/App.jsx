
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import RoleSelection from './components/RoleSelection';
import Chatbot from './pages/Chatbot';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import './index.css';

// Homepage Component
const HomePage = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <WelcomeMessage />
      <div className="text-center mt-12">
        <button
          onClick={() => onNavigate('dashboard')}
          className="bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border-2 border-transparent hover:border-purple-400"
        >
          🚀 Enter Learning Dashboard
        </button>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ onRoleSelect, onNavigate }) => {
  const [stats] = useState({
    totalStudents: 15420,
    coursesAvailable: 150,
    expertMentors: 45,
    successRate: 94
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Learning Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your learning path and start your journey to becoming a tech expert
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div 
          onClick={() => onNavigate('training')}
          className="bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-200/50 p-6 rounded-2xl cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Start Training</h3>
          <p className="text-gray-600">Begin your personalized learning journey</p>
        </div>

        <div 
          onClick={() => onNavigate('quiz')}
          className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-200/50 p-6 rounded-2xl cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Take Assessment</h3>
          <p className="text-gray-600">Test your knowledge with interactive quizzes</p>
        </div>

        <div 
          onClick={() => onNavigate('resources')}
          className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm border border-violet-200/50 p-6 rounded-2xl cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Browse Resources</h3>
          <p className="text-gray-600">Access learning materials and documentation</p>
        </div>

        <div 
          onClick={() => onNavigate('profile')}
          className="bg-gradient-to-r from-indigo-500/10 to-red-500/10 backdrop-blur-sm border border-indigo-200/50 p-6 rounded-2xl cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <div className="text-4xl mb-4">👤</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">My Profile</h3>
          <p className="text-gray-600">Track progress and manage your account</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Platform Statistics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#ED1B2F] mb-2">{stats.totalStudents.toLocaleString()}</div>
            <div className="text-gray-600 font-medium">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{stats.coursesAvailable}</div>
            <div className="text-gray-600 font-medium">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-600 mb-2">{stats.expertMentors}</div>
            <div className="text-gray-600 font-medium">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{stats.successRate}%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gradient-to-r from-red-900/50 to-purple-900/50 p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="font-bold text-red-200 text-xl mb-3">AI-Powered Learning</h3>
          <p className="text-red-100">Personalized curriculum that adapts to your learning style and pace</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/50 to-violet-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="font-bold text-purple-200 text-xl mb-3">Real-time Analytics</h3>
          <p className="text-purple-100">Track your progress with detailed insights and performance metrics</p>
        </div>
        
        <div className="bg-gradient-to-r from-violet-900/50 to-indigo-900/50 p-8 rounded-2xl border border-violet-500/30 backdrop-blur-sm">
          <div className="text-4xl mb-4">👨‍🏫</div>
          <h3 className="font-bold text-violet-200 text-xl mb-3">Expert Mentorship</h3>
          <p className="text-violet-100">Get guidance from industry professionals with years of experience</p>
        </div>
      </div>

      {/* Role Selection */}
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Choose Your Learning Path</h2>
        <RoleSelection onRoleSelect={onRoleSelect} />
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLogoClick = () => {
    setCurrentPage('home');
    setSelectedRole(null);
    setShowQuiz(false);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'quiz' && !selectedRole) {
      // If trying to access quiz without role, redirect to training first
      setCurrentPage('dashboard');
    }
  };

  const handleRoleSelect = (role, totalModules) => {
    setSelectedRole({ ...role, totalModules });
    setCurrentPage('training');
  };

  const handleStartQuiz = () => {
    if (selectedRole) {
      setShowQuiz(true);
      setCurrentPage('quiz');
    }
  };

  const handleBackFromQuiz = () => {
    setShowQuiz(false);
    setCurrentPage('training');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'dashboard':
        return <Dashboard onRoleSelect={handleRoleSelect} onNavigate={handleNavigate} />;
      
      case 'training':
        return (
          <Chatbot 
            selectedRole={selectedRole}
            onStartQuiz={handleStartQuiz}
          />
        );
      
      case 'quiz':
        if (!selectedRole) {
          return <Dashboard onRoleSelect={handleRoleSelect} onNavigate={handleNavigate} />;
        }
        return (
          <Quiz 
            role={selectedRole}
            onBack={handleBackFromQuiz}
          />
        );
      
      case 'resources':
        return <Resources />;
      
      case 'profile':
        return <Profile />;
      
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navbar 
        onLogoClick={handleLogoClick}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

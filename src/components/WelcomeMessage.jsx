
import React from 'react';
import { FaBrain, FaChartLine, FaCertificate, FaHeadset, FaRocket, FaGraduationCap, FaStar, FaArrowRight, FaPlay } from 'react-icons/fa';

const features = [
  {
    icon: FaBrain,
    title: 'Smart Learning',
    description: 'AI algorithms that personalize your learning experience',
    color: 'from-red-500 to-purple-500'
  },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    description: 'Real-time analytics to monitor your advancement',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: FaCertificate,
    title: 'Certifications',
    description: 'Industry-recognized credentials upon completion',
    color: 'from-violet-500 to-indigo-500'
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our expert team',
    color: 'from-indigo-500 to-red-500'
  }
];

const WelcomeMessage = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800 text-white rounded-3xl shadow-2xl mb-8 border-2 border-purple-500/30">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-violet-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-400 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative p-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#ED1B2F] to-purple-600 p-6 rounded-3xl shadow-xl">
              <FaRocket size={48} className="text-white animate-bounce" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
            Welcome to AST Learning Hub
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
            Transform your career with our AI-powered learning platform. Master cutting-edge technologies
            through personalized training modules designed by industry experts.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-gradient-to-r from-red-600/80 to-purple-600/80 px-6 py-3 rounded-full text-white font-semibold backdrop-blur-sm border border-red-400/50 shadow-lg">
              🚀 Personalized Learning Paths
            </span>
            <span className="bg-gradient-to-r from-purple-600/80 to-violet-600/80 px-6 py-3 rounded-full text-white font-semibold backdrop-blur-sm border border-purple-400/50 shadow-lg">
              📊 Real-time Progress Tracking
            </span>
            <span className="bg-gradient-to-r from-violet-600/80 to-indigo-600/80 px-6 py-3 rounded-full text-white font-semibold backdrop-blur-sm border border-violet-400/50 shadow-lg">
              🎯 Industry-Relevant Projects
            </span>
            <span className="bg-gradient-to-r from-indigo-600/80 to-red-600/80 px-6 py-3 rounded-full text-white font-semibold backdrop-blur-sm border border-indigo-400/50 shadow-lg">
              🏆 Professional Certification
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-700/50 to-purple-800/50 p-8 rounded-3xl backdrop-blur-sm border border-purple-400/30 hover:border-red-400/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/25 transform group-hover:scale-105">
                <div className="bg-gradient-to-r from-red-500 to-purple-500 p-4 rounded-2xl w-fit mx-auto mb-4 shadow-lg">
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-700/30 to-purple-800/30 backdrop-blur-sm p-10 rounded-3xl border border-purple-400/30 shadow-2xl">
            <h3 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Career?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Join thousands of professionals who have accelerated their careers through our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/dashboard" className="flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ED1B2F] to-red-600 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 text-lg">
                <FaPlay className="text-white" />
                <span>Start Learning Today</span>
              </a>
              <a href="/training" className="flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-lg">
                <FaArrowRight className="text-white" />
                <span>Explore Training</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;

import React from 'react';
import { FaBrain, FaChartLine, FaCertificate, FaHeadset, FaRocket, FaGraduationCap, FaStar, FaArrowRight, FaPlay } from 'react-icons/fa';

const features = [
  {
    icon: FaBrain,
    title: 'Smart Learning',
    description: 'AI algorithms that personalize your learning experience',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    description: 'Real-time analytics to monitor your advancement',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaCertificate,
    title: 'Certifications',
    description: 'Industry-recognized credentials upon completion',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our expert team',
    color: 'from-red-500 to-red-600'
  }
];


const WelcomeMessage = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white text-gray-800 rounded-3xl shadow-2xl mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-400 rounded-full"></div>
      </div>

      <div className="relative p-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-800 bg-opacity-20 p-4 rounded-2xl">
              <FaRocket size={40} className="text-red-600 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Welcome to AST Learning Hub
          </h1>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed text-gray-700">
            Transform your career with our AI-powered learning platform. Master cutting-edge technologies
            through personalized training modules designed by industry experts.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-gray-800 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-600 border-opacity-30">
              🚀 Personalized Learning Paths
            </span>
            <span className="bg-gray-800 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-600 border-opacity-30">
              📊 Real-time Progress Tracking
            </span>
            <span className="bg-gray-800 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-600 border-opacity-30">
              🎯 Industry-Relevant Projects
            </span>
            <span className="bg-gray-800 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-gray-600 border-opacity-30">
              🏆 Professional Certification
            </span>
          </div>
        </div>

        {/* Stats and Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-15 p-6 rounded-2xl backdrop-blur-sm border border-white border-opacity-20">
                <feature.icon size={32} className={`mx-auto mb-3 text-white ${feature.color.split('-')[1]}-300`} />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm opacity-90 text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-800 bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 border-opacity-20">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Career?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto text-gray-700">
              Join thousands of professionals who have accelerated their careers through our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/dashboard" className="flex items-center space-x-2 text-sm px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 transition duration-300">
                <FaPlay className="text-white" />
                <span>Start Learning Today</span>
              </a>
              <a href="/training" className="flex items-center space-x-2 text-sm px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold shadow-lg hover:bg-gray-900 transition duration-300">
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
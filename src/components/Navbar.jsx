
import React from 'react';
import { FaRobot, FaUserGraduate, FaChartLine, FaHome, FaTachometerAlt, FaBook } from 'react-icons/fa';

const Navbar = ({ onLogoClick, currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { id: 'training', label: 'Training', icon: FaBook }
  ];

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#1f2937] via-[#374151] to-[#4b5563] text-white shadow-xl border-b-4 border-[#ED1B2F] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Clickable */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onLogoClick}
          >
            <div className="bg-[#ED1B2F] p-2 rounded-lg">
              <FaRobot className="text-white text-xl animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Akshay Software Technologies
              </h1>
              <p className="text-xs text-gray-300">AI Learning Platform</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-[#ED1B2F] text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="text-sm" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side Info */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm bg-gray-800 px-3 py-1 rounded-full">
                <FaUserGraduate className="text-[#ED1B2F]" />
                <span>AI Training</span>
              </div>
              <div className="flex items-center space-x-2 text-sm bg-gray-800 px-3 py-1 rounded-full">
                <FaChartLine className="text-green-400" />
                <span>Live Analytics</span>
              </div>
            </div>
            
            {/* User Avatar */}
            <div className="w-8 h-8 bg-gradient-to-r from-[#ED1B2F] to-[#D1152A] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">U</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3">
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all text-xs ${
                    isActive 
                      ? 'bg-[#ED1B2F] text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="text-xs" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

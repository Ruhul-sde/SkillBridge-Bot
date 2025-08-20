
import React from 'react';
import { FaCode, FaDatabase, FaMobile, FaCloud, FaRobot, FaChartBar } from 'react-icons/fa';

const RoleSelection = ({ onRoleSelect }) => {
  const roles = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      description: 'Master modern web technologies and create stunning user interfaces',
      icon: FaCode,
      modules: 8,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'JavaScript', 'CSS3', 'UI/UX']
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      description: 'Build robust server-side applications and APIs',
      icon: FaDatabase,
      modules: 10,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Python', 'Database', 'API Design']
    },
    {
      id: 'mobile',
      title: 'Mobile Developer',
      description: 'Create innovative mobile applications for iOS and Android',
      icon: FaMobile,
      modules: 9,
      color: 'from-purple-500 to-pink-500',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      description: 'Master deployment, automation, and cloud infrastructure',
      icon: FaCloud,
      modules: 7,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
    },
    {
      id: 'ai',
      title: 'AI/ML Engineer',
      description: 'Develop intelligent systems and machine learning models',
      icon: FaRobot,
      modules: 12,
      color: 'from-indigo-500 to-purple-600',
      skills: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science']
    },
    {
      id: 'analyst',
      title: 'Data Analyst',
      description: 'Extract insights from data and drive business decisions',
      icon: FaChartBar,
      modules: 6,
      color: 'from-teal-500 to-blue-600',
      skills: ['SQL', 'Python', 'Visualization', 'Statistics']
    }
  ];

  const handleRoleClick = (role) => {
    onRoleSelect(role, role.modules);
  };

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Career Path</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a role that aligns with your career goals and start your personalized learning journey with industry-relevant modules.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => {
          const IconComponent = role.icon;
          return (
            <div
              key={role.id}
              onClick={() => handleRoleClick(role)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-r ${role.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent size={32} />
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                      {role.modules} Modules
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <p className="text-sm opacity-90">{role.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-[#ED1B2F] to-[#D1152A] text-white py-3 rounded-lg font-semibold transform transition-all duration-200 group-hover:from-[#D1152A] group-hover:to-[#B71C1C]">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoleSelection;

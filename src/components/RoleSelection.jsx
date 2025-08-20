import React from 'react';
import { FaUserTie, FaCode, FaCalculator, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';

const RoleSelection = ({ onRoleSelect }) => {
  const roles = [
    { name: 'HR', icon: <FaUsers size={20} />, totalModules: 5 },
    { name: 'Manager', icon: <FaUserTie size={20} />, totalModules: 5 },
    { name: 'Developer', icon: <FaCode size={20} />, totalModules: 5 },
    { name: 'Accountant', icon: <FaCalculator size={20} />, totalModules: 5 },
    { name: 'Analyst', icon: <FaChartLine size={20} />, totalModules: 5 },
    { name: 'Engineer', icon: <FaCogs size={20} />, totalModules: 5 },
  ];

  return (
    <div className="mt-6">
      <p className="font-semibold text-lg text-center">Please select your role:</p>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {roles.map((role) => (
          <button
            key={role.name}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={() => onRoleSelect(role.name, role.totalModules)}
          >
            <div className="text-[#ED1B2F] mb-2">{role.icon}</div>
            <span className="font-medium text-sm">{role.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;

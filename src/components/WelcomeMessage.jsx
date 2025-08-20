import React from 'react';
import { FaSmile } from 'react-icons/fa';

const WelcomeMessage = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-[#ED1B2F] to-[#D1152A] text-white rounded-lg shadow-lg">
      <div className="flex items-center">
        <FaSmile size={30} className="mr-3" />
        <p className="text-2xl font-bold">Welcome to Akshay Software Technologies!</p>
      </div>
      <p className="mt-3 text-lg">
        We are excited to help you develop your career with us.
      </p>
    </div>
  );
};

export default WelcomeMessage;
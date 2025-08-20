import React from 'react';
import Chatbot from './pages/Chatbot';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Chatbot />
    </div>
  );
};

export default App;
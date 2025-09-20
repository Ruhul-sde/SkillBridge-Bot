
import React, { useState } from 'react';
import { FaSearch, FaBook, FaVideo, FaCode, FaDownload, FaExternalLinkAlt, FaTags, FaFilter, FaStar } from 'react-icons/fa';

const resourcesData = [
  {
    id: 1,
    title: "React Hooks Complete Guide",
    type: "documentation",
    category: "frontend",
    description: "Comprehensive guide covering useState, useEffect, useContext, and custom hooks",
    tags: ["react", "hooks", "javascript"],
    rating: 4.8,
    downloadUrl: "#",
    externalUrl: "https://react.dev/learn"
  },
  {
    id: 2,
    title: "Node.js Best Practices",
    type: "video",
    category: "backend",
    description: "Learn industry best practices for Node.js development and architecture",
    tags: ["nodejs", "backend", "architecture"],
    rating: 4.9,
    downloadUrl: "#",
    externalUrl: "#"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    type: "article",
    category: "frontend",
    description: "When to use CSS Grid vs Flexbox with practical examples",
    tags: ["css", "layout", "responsive"],
    rating: 4.7,
    downloadUrl: "#",
    externalUrl: "#"
  },
  {
    id: 4,
    title: "Database Design Patterns",
    type: "ebook",
    category: "backend",
    description: "Essential database design patterns for scalable applications",
    tags: ["database", "sql", "design-patterns"],
    rating: 4.6,
    downloadUrl: "#",
    externalUrl: "#"
  }
];

const faqData = [
  {
    id: 1,
    question: "How do I implement authentication in React?",
    answer: "You can implement authentication using JWT tokens, Context API for state management, and protected routes. Consider using libraries like Auth0 or Firebase Auth for production applications.",
    category: "frontend",
    tags: ["react", "authentication", "security"]
  },
  {
    id: 2,
    question: "What's the difference between SQL and NoSQL databases?",
    answer: "SQL databases are relational with structured schemas, while NoSQL databases are non-relational and can handle unstructured data. Choose SQL for complex relationships and ACID compliance, NoSQL for scalability and flexible schemas.",
    category: "backend",
    tags: ["database", "sql", "nosql"]
  },
  {
    id: 3,
    question: "How to optimize React app performance?",
    answer: "Use React.memo, useMemo, useCallback for preventing unnecessary re-renders, implement code splitting with lazy loading, optimize bundle size, and use React DevTools Profiler to identify performance bottlenecks.",
    category: "frontend",
    tags: ["react", "performance", "optimization"]
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeTab, setActiveTab] = useState('resources');

  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return FaVideo;
      case 'documentation': return FaBook;
      case 'article': return FaBook;
      case 'ebook': return FaBook;
      default: return FaCode;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700';
      case 'documentation': return 'bg-blue-100 text-blue-700';
      case 'article': return 'bg-green-100 text-green-700';
      case 'ebook': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Learning Resources & FAQ
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive collection of resources and get answers to your questions
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources, questions, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ED1B2F] focus:border-transparent outline-none"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ED1B2F] focus:border-transparent outline-none"
          >
            <option value="all">All Categories</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
          </select>

          {/* Type Filter (only for resources tab) */}
          {activeTab === 'resources' && (
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ED1B2F] focus:border-transparent outline-none"
            >
              <option value="all">All Types</option>
              <option value="video">Videos</option>
              <option value="documentation">Documentation</option>
              <option value="article">Articles</option>
              <option value="ebook">eBooks</option>
            </select>
          )}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mt-6 border-b">
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'resources'
                ? 'border-[#ED1B2F] text-[#ED1B2F]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === 'faq'
                ? 'border-[#ED1B2F] text-[#ED1B2F]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            FAQ
          </button>
        </div>
      </div>

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            
            return (
              <div key={resource.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getTypeColor(resource.type)}`}>
                    <TypeIcon size={24} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-medium text-gray-700">{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-red-100 to-purple-100 text-red-700 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#ED1B2F] to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                    <FaDownload />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-6">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex-1">{faq.question}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  faq.category === 'frontend' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {faq.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{faq.answer}</p>
              
              <div className="flex flex-wrap gap-2">
                {faq.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-red-100 to-purple-100 text-red-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {((activeTab === 'resources' && filteredResources.length === 0) || 
        (activeTab === 'faq' && filteredFAQs.length === 0)) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default Resources;

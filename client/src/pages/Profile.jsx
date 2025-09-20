
import React, { useState } from 'react';
import { FaUser, FaEdit, FaSave, FaTimes, FaTrophy, FaCertificate, FaCalendar, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Full Stack Developer',
    experience: 'Intermediate',
    bio: 'Passionate developer learning new technologies and building amazing applications.',
    joinDate: '2024-01-15',
    location: 'New York, USA',
    skills: ['React', 'Node.js', 'Python', 'MongoDB']
  });

  const [achievements] = useState([
    { id: 1, title: 'Frontend Master', description: 'Completed all frontend modules', date: '2024-01-20', icon: '🎨' },
    { id: 2, title: 'Quick Learner', description: 'Completed 5 modules in one week', date: '2024-01-18', icon: '⚡' },
    { id: 3, title: 'Perfect Score', description: 'Achieved 100% on React assessment', date: '2024-01-22', icon: '💯' }
  ]);

  const [stats] = useState({
    modulesCompleted: 12,
    totalHours: 45,
    averageScore: 87,
    streak: 7
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset changes if needed
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-2xl shadow-2xl p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-[#ED1B2F] to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <FaUser size={48} className="text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
              <FaCheckCircle className="text-white text-sm" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 backdrop-blur-sm w-full"
                  placeholder="Full Name"
                />
                <input
                  value={profile.role}
                  onChange={(e) => setProfile({...profile, role: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 backdrop-blur-sm w-full"
                  placeholder="Role/Title"
                />
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/60 backdrop-blur-sm w-full h-24 resize-none"
                  placeholder="Bio"
                />
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
                <p className="text-xl text-purple-200 mb-2">{profile.role}</p>
                <p className="text-gray-300 mb-4 max-w-2xl">{profile.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <FaCalendar />
                    <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                  </span>
                  <span>📍 {profile.location}</span>
                </div>
              </div>
            )}
          </div>

          {/* Edit Button */}
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl transition-colors"
                >
                  <FaSave />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-sm border border-white/20"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <FaChartLine className="text-[#ED1B2F]" />
              <span>Learning Stats</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-r from-red-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-[#ED1B2F] mb-1">{stats.modulesCompleted}</div>
                <div className="text-sm text-gray-600">Modules Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">{stats.totalHours}</div>
                <div className="text-sm text-gray-600">Total Hours</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-1">{stats.averageScore}%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-1">{stats.streak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                <FaCertificate className="text-[#ED1B2F]" />
                <span>Download Certificate</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                <FaChartLine className="text-purple-600" />
                <span>View Progress Report</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                <FaUser className="text-blue-600" />
                <span>Account Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <FaTrophy className="text-yellow-500" />
              <span>Achievements</span>
            </h2>
            
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Earned on {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-yellow-500">
                    <FaTrophy size={24} />
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Overview */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Frontend Development</span>
                    <span className="text-sm text-gray-500">8/10 modules</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-[#ED1B2F] to-purple-600 h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Backend Development</span>
                    <span className="text-sm text-gray-500">4/12 modules</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 h-3 rounded-full" style={{width: '33%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Full Stack Projects</span>
                    <span className="text-sm text-gray-500">0/8 modules</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 h-3 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

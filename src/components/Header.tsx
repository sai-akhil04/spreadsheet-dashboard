import React, { useState } from 'react';

const Header = () => {
  const tabs = ['Overview', 'Leads', 'Campaigns', 'Reports'];
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">📊 Dashboard</h1>

      <div className="flex gap-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              console.log(`Tab clicked: ${tab}`);
              setActiveTab(tab);
            }}
            className={`pb-2 border-b-2 transition-all duration-200 ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

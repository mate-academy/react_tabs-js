import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const activeTab = tabs.find(tab => tab.id === selectedTabId);
  const handleSelectTab = (tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      {
        activeTab && (
          <h1 className="title">
            {`Selected tab is ${activeTab.title}`}
          </h1>
        )
      }

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleSelectTab}
      />
    </div>
  );
};

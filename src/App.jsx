import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const [activeTabId, setActiveTabId] = useState('tab-1');

  const handleTabSelected = tabId => {
    if (tabId !== activeTabId) {
      setActiveTabId(tabId);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is{' '}
        {tabs.map(tab => (tab.id === activeTabId ? tab.title : null))}
      </h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

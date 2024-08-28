import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  const handleTabSelected = id => {
    setActiveTabId(id);
  };

  // Moving the logic to a variable
  const activeTabTitle = tabs.find(tab => tab.id === activeTabId)?.title || tabs[0].title;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {activeTabTitle}
      </h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './tabsData';
import { useState } from 'react';
import { Tabs } from './components/Tabs';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === activeTabId).title}
      </h1>
      <Tabs tabs={tabs} activeTabId={activeTabId} onTabSelected={setActiveTabId} />
    </div>
  );
};

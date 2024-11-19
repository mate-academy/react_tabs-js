import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  const handleTabClick = tabId => {
    setActiveTab(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTabContent.title}</h1>
      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          activeTabId={activeTab}
          onTabSelected={handleTabClick}
        />
        <div className="block" data-cy="TabContent">
          {activeTabContent.content}
        </div>
      </div>
    </div>
  );
};

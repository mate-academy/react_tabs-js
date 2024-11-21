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
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const activeTab = tabs.find(tab => activeTabId === tab.id) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTab.id}
        onTabSelected={id => setActiveTab(tabs.find(tab => tab.id === id))}
      />
    </div>
  );
};
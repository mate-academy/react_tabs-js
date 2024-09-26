import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.filter(tab => tab.id === activeTab)[0].title}
      </h1>

      <Tabs activeTabId={activeTab} onTabSelected={setActiveTab} tabs={tabs} />
    </div>
  );
};

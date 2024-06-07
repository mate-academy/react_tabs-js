import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const valTabId = tabs.find(tab => tab.id === activeTabId) || tabs[0].id;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === valTabId)?.title}
      </h1>

      <Tabs
        tabs={tabs}
        activeTabId={valTabId}
        onTabSelected={id => {
          setActiveTabId(id);
        }}
      />
    </div>
  );
};

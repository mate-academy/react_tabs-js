import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabsFromServer[0].id);

  const activeTab =
    tabsFromServer.find(tab => tab.id === activeTabId) || tabsFromServer[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <Tabs
        tabs={tabsFromServer}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

const tabsData = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabsData[0].id);

  const activeTab =
    tabsData.find(tab => tab.id === selectedTabId) || tabsData[0];

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>

      <Tabs
        tabs={tabsData}
        activeTabId={selectedTabId}
        onTabSelected={id => setSelectedTabId(id)}
      />
    </div>
  );
};

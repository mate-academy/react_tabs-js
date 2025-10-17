import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import 'bulma/css/bulma.css';

const tabsData = [
  { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
  { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
  { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
  { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-20');

  const activeTab = tabsData.find(tab => tab.id === activeTabId) || tabsData[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <Tabs
        tabs={tabsData}
        activeTabId={activeTab.id}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

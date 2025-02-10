import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

const tabsData = [
  { id: 'tab-1', title: 'Tab 1', content: 'Content of Tab 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Content of Tab 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Content of Tab 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabsData[0].id);

  return (
    <div>
      <h1>
        Selected tab is {tabsData.find(tab => tab.id === activeTabId)?.title}
      </h1>
      <Tabs
        tabs={tabsData}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

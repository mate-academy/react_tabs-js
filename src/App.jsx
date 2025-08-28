import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

export const App = () => {
  // Масив вкладок
  const tabsData = [
    { id: 'tab1', title: 'Tab 1', content: 'This is content of Tab 1' },
    { id: 'tab2', title: 'Tab 2', content: 'This is content of Tab 2' },
    { id: 'tab3', title: 'Tab 3', content: 'This is content of Tab 3' },
  ];

  const [activeTabId, setActiveTabId] = useState(tabsData[0].id);

  const handleTabSelected = (tabId) => {
    setActiveTabId(tabId);
  };

  const activeTab = tabsData.find(tab => tab.id === activeTabId) || tabsData[0];

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {activeTab.title}
      </h1>
      <Tabs
        tabs={tabsData}
        activeTabId={activeTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

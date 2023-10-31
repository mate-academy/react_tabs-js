import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './constants';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const tabSelected = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelect={tabSelected}
      />
    </div>
  );
};

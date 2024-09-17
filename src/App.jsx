import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';
import { tabs } from './constants/constants';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const onTabSelected = id => {
    setActiveTabId(id);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

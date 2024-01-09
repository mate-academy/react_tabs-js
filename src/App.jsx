import React, { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { tabs } from './constants';
import { Tabs } from './components/Tabs';

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const { title } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const handleTabSelected = (tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>
      <Tabs
        tabsItem={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

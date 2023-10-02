import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';
import tabs from './api/tabs.json';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  const getTitle = () => `Selected tab is ${tabs.find(tab => tab.id === selectedTab).title}`;

  return (
    <div className="section">
      <h1 className="title">
        {getTitle()}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab}
        onTabSelected={(tab) => {
          setSelectedTab(tab.id);
        }}
      />
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { tabs } from './constraints';
import { Tabs } from './components/Tabs';

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={selectedTabId}
        onTabSelected={id => setSelectedTabId(id)}
      />
    </div>
  );
};

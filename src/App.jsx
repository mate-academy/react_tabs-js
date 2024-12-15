import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './api/tabsData';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTabTitle = tabs.find(tab => tab.id === activeTabId)?.title || '';

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTabTitle}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

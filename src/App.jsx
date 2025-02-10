import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { getContent, tabs } from './utils';
import './App.scss';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]);

  const onTabSelected = tabId => {
    setActiveTabId(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${getContent(tabs, activeTabId, 'title')}`}</h1>

      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        activeTabId={activeTabId}
      />
    </div>
  );
};

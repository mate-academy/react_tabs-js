import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './constants';

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const tabSelected = (tabId) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is Tab ${selectedTabId.replace('tab-', '')}`}
      </h1>

      <Tabs tabs={tabs} onTabSelect={tabSelected} selectedTabId={selectedTabId} />
    </div>
  );
};

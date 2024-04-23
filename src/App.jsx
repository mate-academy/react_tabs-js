import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './constants';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const tabSelected = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${tabSelected.title}`}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

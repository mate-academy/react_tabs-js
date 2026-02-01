import React, { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './components/Tabs/constants';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const onTabSelected = tabs.find(tab => tab.id !== activeTabId)
    ? tabs.find(tab => tab.id === activeTabId)
    : tabs[0];

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${onTabSelected.title}`}</h1>
      <div data-cy="TabsComponent">
        <Tabs
          activeTabId={activeTabId}
          tabs={tabs}
          onTabSelected={setActiveTabId}
        />
      </div>
    </div>
  );
};

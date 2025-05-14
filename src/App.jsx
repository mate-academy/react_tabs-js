import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabID, setActiveTabID] = useState('tab-1');
  const activeTab = tabs.find(tab => tab.id === activeTabID) || tabs[0];

  function onTabSelected(tabId) {
    return setActiveTabID(tabId);
  }

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <Tabs
        data-cy="TabsComponent"
        tabs={tabs}
        activeTabID={activeTabID}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

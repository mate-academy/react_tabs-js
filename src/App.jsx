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

const ACTIVE_TAB_ID = tabs[0].id;

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(ACTIVE_TAB_ID);
  const defaultTab = tabs[0];
  const selectedTab = tabs.find(tab => activeTabId === tab.id) || defaultTab;

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

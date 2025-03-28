/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-2');

  const onTabSelected = id => {
    // console.log(id);
    setActiveTabId(id);
  };

  const validTabId = tabs.find(tab => tab.id === activeTabId);
  let selectedTab = '';
  let parts = [];

  if (validTabId) {
    parts = activeTabId.split('-');
    selectedTab = parts[1];
  } else {
    parts = tabs[0].id.split('-');
    selectedTab = parts[1];
    setActiveTabId(tabs[0].id);
  }

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab {selectedTab}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

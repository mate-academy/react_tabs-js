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
  const [onTabSelected, setOnTabSelected] = useState(tabs[0].id);
  const activeTabId = onTabSelected;

  // console.log(activeTabId);

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  // console.log(activeTab);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab?.title}</h1>

      <Tabs
        tabs={tabs}
        onTabSelected={setOnTabSelected}
        activeTabId={activeTabId}
      />
    </div>
  );
};

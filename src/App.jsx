import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectetTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === selectetTab)?.title}
      </h1>
      <Tabs
        tabs={tabs}
        activeTabId={selectetTab}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

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

const DEFAULT_ACTIVE_TAB_ID = 'tab-1';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_ACTIVE_TAB_ID);

  const activeItem = tabs.find(item => item.id === selectedTab);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeItem.title}</h1>

      <Tabs
        tabs={tabs}
        onTabSelected={setSelectedTab}
        activeTabId={selectedTab}
      />
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const TAB_1 = 'tab-1';
const TAB_2 = 'tab-2';
const TAB_3 = 'tab-3';

export const tabs = [
  { id: TAB_1, title: 'Tab 1', content: 'Some text 1' },
  { id: TAB_2, title: 'Tab 2', content: 'Some text 2' },
  { id: TAB_3, title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(TAB_1);

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  const onTabSelected = (id) => {
    setSelectedTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        handleSelect={onTabSelected}
        selectedTab={selectedTab}
      />
    </div>
  );
};

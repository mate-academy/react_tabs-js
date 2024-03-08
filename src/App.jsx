import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const FIRST_TABS = tabs[0];

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(FIRST_TABS);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

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

const DEFAULT_TAB = tabs[0];

export const App = () => {
  const [selectedTab, onTabSelected] = useState(DEFAULT_TAB);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>

      <Tabs
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
        tabs={tabs}
      />
    </div>
  );
};

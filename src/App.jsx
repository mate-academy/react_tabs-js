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

const getTabByID = id => tabs.find(tab => tab.id === id) || tabs[0];

const START_TAB_ID = tabs[0].id;

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(START_TAB_ID);

  const handleTabSelected = (tabClick) => {
    setSelectedTabId(tabClick.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${getTabByID(selectedTabId).title}`}
      </h1>

      <Tabs
        data-cy="tab-content"
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

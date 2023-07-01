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

const defaultId = tabs[0].id;

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(defaultId);

  const onSelectedTabId = (tab) => {
    const tabIndex = tabs.findIndex(item => item.id === tab.id);

    setSelectedTabId(tabIndex >= 0 ? tab.id : defaultId);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is `}
        {tabs.find(tab => tab.id === selectedTabId).title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onSelectedTabId}
      />
    </div>
  );
};

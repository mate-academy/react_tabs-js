import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: ' Tab 1', title: 'Tab 1', content: 'Some text 1' },
  { id: ' Tab 2', title: 'Tab 2', content: 'Some text 2' },
  { id: ' Tab 3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabSelected = (tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {selectedTabId}
      </h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={handleTabSelected}
        />
      </div>

      <div
        className="block"
        data-cy="TabContent"
      />

      <div
        className="block"
        data-cy="TabContent"
      >
        {(tabs.find(tab => tab.id === selectedTabId)
          || tabs[0])?.content}
      </div>
    </div>
  );
};

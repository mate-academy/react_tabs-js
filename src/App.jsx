import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Switch to 3 Tab',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'I\'m not here, look for me on 4 Tab',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'No, switch to 2 Tab',
  },
  {
    id: 'tab-4',
    title: 'Tab 4',
    content: 'I caught you',
  },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [onTabSelected, setSelectedTab] = useState(tabs[0].title);

  function updateTabId(title) {
    tabs.forEach((tab) => {
      if (tab.title === title) {
        setSelectedTabId(tab.id);
        setSelectedTab(tab.title);
      }
    });
  }

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${onTabSelected}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={(title) => {
          updateTabId(title);
        }}
      />
    </div>
  );
};

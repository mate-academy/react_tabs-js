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

export function App() {
  const [currentId, setCurrentId] = useState(tabs[0].id);

  const handleTabId = (id) => setCurrentId(id);

  const findCurrentTab = (array) => {
    return array.find(element => element.id === currentId);
  };

  const currentTab = findCurrentTab(tabs);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {currentTab.title}</h1>

      <Tabs
        tabs={tabs}
        handleTabId={handleTabId}
        currentTab={currentTab}
        key={tabs.id}
      />
    </div>
  );
}

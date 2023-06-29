import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// eslint-disable-next-line no-shadow
const useSelectedTab = (tabs) => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const foundTab = tabs.find(tab => tab.id === selectedTabId);

  const handleSelectingTab = tabId => (setSelectedTabId(tabId));

  return [foundTab, handleSelectingTab];
};

export const App = () => {
  const preparedTabs = [...tabs];
  const [foundTab, handleSelectingTab] = useSelectedTab(preparedTabs);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${foundTab.title}`}
      </h1>
      <Tabs
        tabs={preparedTabs}
        onTabSelected={handleSelectingTab}
        foundTab={foundTab}
      />
    </div>
  );
};

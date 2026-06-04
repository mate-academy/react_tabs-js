import 'bulma/css/bulma.css';
import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].id);
  const handleTabClick = tabId => {
    setSelectedTab(tabId);
  };

  const activeTab = tabs.find(tab => tab.id === selectedTab) || tabs[0];
  const activeTabTitle = activeTab.title ? activeTab.title : '';

  return (
    <>
      <h1 className="title">Selected tab is {activeTabTitle}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={selectedTab}
        onTabSelected={handleTabClick}
      />
    </>
  );
};

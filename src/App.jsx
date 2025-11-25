import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: '1', title: 'Tab 1', content: 'Some text 1' },
  { id: '2', title: 'Tab 2', content: 'Some text 2' },
  { id: '3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = React.useState(tabs[0].id);

  const handleTabSelected = tabId => {
    setActiveTabId(tabId);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const activeTabTitle = activeTab ? activeTab.title : '';

  const headerText = `Selected tab is ${activeTabTitle}`;

  return (
    <div className="section App">
      <h1 className="title">{headerText}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            onTabSelected={handleTabSelected}
          />
        </div>
      </div>
    </div>
  );
};

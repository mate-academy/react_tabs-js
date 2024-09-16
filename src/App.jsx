import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {currentTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            activeTabId={activeTab}
            tabs={tabs}
            onTabSelected={tabId => setActiveTab(tabId)}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    </div>
  );
};

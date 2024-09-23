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

const getActiveTab = (inputTabs, { activeTabId }) => {
  const activeTab = inputTabs.find(tab => tab.id === activeTabId);

  return activeTab;
};

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const visibleTab = getActiveTab(tabs, { activeTabId });

  return (
    <div className="section">
      <h1 className="title">Selected tab is {visibleTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <Tabs
              tabs={tabs}
              activeTabId={activeTabId}
              onTabSelected={id => setActiveTabId(id)}
            />
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {visibleTab.content}
        </div>
      </div>
    </div>
  );
};

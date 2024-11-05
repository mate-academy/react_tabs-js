import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
function getCurrentTab(id) {
  const currentTab = tabs.find(tab => tab.id === id) || tabs[0];

  return currentTab;
}

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = getCurrentTab(activeTabId);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            activeTabId={activeTab.id}
            onTabSelected={setActiveTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};

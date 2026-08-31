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

function openRightTab(openedTabId) {
  const openedTab = tabs.find(tab => tab.id === openedTabId);

  if (openedTab) {
    return openedTab;
  }

  return tabs[0];
}

export const App = () => {
  const [openedTab, setOpenedTab] = useState(tabs[0].id);
  const rightTab = openRightTab(openedTab);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {rightTab.title}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={rightTab.id}
        onTabSelected={id => setOpenedTab(id)}
      />
    </div>
  );
};

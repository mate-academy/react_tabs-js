import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';

import { Tabs } from './components/Tabs';
import { tabs } from './tabs';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleTab = tabId => {
    if (tabId !== activeTabId) {
      setActiveTabId(tabId);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <Tabs tabs={tabs} activeTabId={activeTabId} onTabSelected={handleTab} />
    </div>
  );
};

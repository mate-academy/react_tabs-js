import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './tabsFromServer';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const handleTabSelected = id => {
    setActiveTabId(id);
  };

  return (
    <Tabs
      tabs={tabs}
      activeTabId={activeTabId}
      onTabSelected={handleTabSelected}
    />
  );
};

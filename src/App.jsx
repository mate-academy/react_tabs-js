import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id); 

  const onTabSelected = id => {
    setActiveTabId(id); 
  };

  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0]; 

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

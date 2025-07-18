import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <div className="App">
      <h1 className="title">{`Selected tab is ${tabs.find(tab => tab.id === activeTabId).title}`}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

export default App;

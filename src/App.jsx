// src/App.jsx
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// import stateless Tabs component
import { Tabs } from './components/Tabs';

// tabs data
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

function App() {
  // 1) track which tab is active
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // 2) find the active tab object to render its title in the h1
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div className="section">
      {/* dynamic heading */}
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      {/* wrap for Cypress if needed */}
      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabSelected={setActiveTabId}
        />
      </div>
    </div>
  );
}

export default App;

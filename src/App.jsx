import React, { useState } from 'react';

import { Tabs } from './components/Tabs';
import tabs from './tabs.json';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const [selectedTabs, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabs.title}`}
      </h1>

      <Tabs
        selectedTabId={selectedTabs.id}
        onTabSelected={setSelectedTab}
        tabs={tabs}
      />
    </div>
  );
};

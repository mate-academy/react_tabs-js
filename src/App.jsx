import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs/tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './constants';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const active = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title" data-cy={active.content}>
        Selected tab is {active.title}
      </h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

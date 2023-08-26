import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  useEffect(() => {
    window.location.hash = tabs[0].id;
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hashTabId = window.location.hash.substring(1);
      // eslint-disable-next-line no-shadow
      const tab = tabs.find(tab => tab.id === hashTabId);

      if (tab) {
        setSelectedTabId(hashTabId);
      } else {
        setSelectedTabId(tabs[0].id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleTabSelected = (tabId) => {
    setSelectedTabId(tabId);
    window.location.hash = tabId;
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {tabs.find(tab => tab.id === selectedTabId).title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};

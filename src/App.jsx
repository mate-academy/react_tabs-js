import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = () => {
  const [tabSelected, setTabSelected] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab {parseInt(tabSelected.match(/\d+/)[0], 10)}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={tabSelected}
        onTabSelected={setTabSelected}
      />
    </div>
  );
};

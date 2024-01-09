import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './components/constants';

export const App = () => {
  const listOfTabs = [...tabs];
  const [selectedTab, setSelectedTab] = useState(listOfTabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={listOfTabs}
        selectedTab={selectedTab}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './constants';

import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            selectedTab={selectedTab}
            onTabSelected={tabName => {
              setSelectedTab(tabName);
            }}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};

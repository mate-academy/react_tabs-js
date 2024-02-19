import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './constants/constants';
import { Tabs } from './components/Tabs';

const startRendTabsId = tabs[0].id;

export const App = () => {
  const [tabActiveId, setTabActiveId] = useState(startRendTabsId);
  const tabActiveIdVar = tabActiveId;

  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab 1</h1>
      <Tabs
        tabs={tabs}
        tabActiveIdVar={tabActiveIdVar}
        changeTabFromTabs={tabId => {
          setTabActiveId(tabId);
        }}
      />
    </div>
  );
};

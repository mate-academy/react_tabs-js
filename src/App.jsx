import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { tabs } from './api/tabsData';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

export const App = () => {
  const [selected, setSelected] = useState(tabs[0].id);

  const onTabSelected = tabData => {
    setSelected(tabData.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.map(({ id, title }) => id === selected && title)}
      </h1>

      <Tabs
        onTabSelected={onTabSelected}
        selectedTabId={selected}
        tabs={tabs}
      />
    </div>
  );
};

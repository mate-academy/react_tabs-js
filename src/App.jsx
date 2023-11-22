import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { useState } from 'react';

import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setselectedTabId] = useState(tabs[0].id);

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={selectedTabId}
      onTabSelected={(tab) => {
        setselectedTabId(tab.id);
      }}
    />
  );
};

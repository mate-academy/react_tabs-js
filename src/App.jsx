import { React, useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs, TAB_ID, TAB_TITLE } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0][TAB_ID]);
  const tabTitle = tabs
    .find(tabItem => tabItem.id === selectedTabId)[TAB_TITLE]
    || tabs[0][TAB_TITLE];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabTitle}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={(tab) => {
          setSelectedTabId(tab[TAB_ID]);
        }}
      />
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// export const tabs = [{
//   id: 'tab-10',
//   title: 'Tab 10',
//   content: 'Some text 10',
// }, {
//   id: 'tab-20',
//   title: 'Tab 20',
//   content: 'Some text 20',
// }, {
//   id: 'tab-30',
//   title: 'Tab 30',
//   content: 'Some text 30',
// }, {
//   id: 'tab-40',
//   title: 'Tab 40',
//   content: 'Some text 40',
// }];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (tab) => {
    if (tabs.find(tab1 => tab1.id === selectedTabId)) {
      setSelectedTabId(tab.id);
    } else {
      setSelectedTabId(tabs[0].id);
    }
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        selectedTabId={selectedTabId}
        setSelectedTabId={setSelectedTabId}
        onTabSelected={onTabSelected}
        selectedTab={selectedTab}
        tabs={tabs}
      />
    </div>
  );
};

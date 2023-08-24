import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { DEFAULT_TAB_ID, findTabById } from './utils';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(DEFAULT_TAB_ID(tabs));

  const onTabSelected = (tabList, selectedId) => {
    if (!findTabById(tabList, selectedId)) {
      setSelectedTabId(DEFAULT_TAB_ID(tabs));

      return;
    }

    setSelectedTabId(selectedId);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${findTabById(tabs, selectedTabId).title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

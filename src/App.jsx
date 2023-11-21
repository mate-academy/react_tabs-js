import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const tabsById = tabs.reduce((accumulator, currentValue) => ({
  ...accumulator,
  [currentValue.id]: currentValue,
}), {});

export const App = () => {
  const setNewTab = (tabId) => {
    setSelectedTabId(tabId);
  };

  const getCurrentTab = selectedTabId => tabsById[selectedTabId] || null;

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const currentTab = getCurrentTab(selectedTabId);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentTab.title}`}</h1>

      <Tabs
        tabs={tabs}
        onTabSelected={setNewTab}
        selectedTabId={selectedTabId}
        getCurrentTab={getCurrentTab}
      />
    </div>
  );
};

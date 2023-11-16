import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const getCurrentTab = (tabID) => {
    const newTab = tabs.find(tab => tab.id === tabID);

    if (!newTab) {
      setSelectedTabId('tab-1');

      return getCurrentTab('tab-1');
    }

    return newTab;
  };

  const setNewTab = (tab) => {
    setSelectedTabId(tab.id);
  };

  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const currentTab = getCurrentTab(selectedTabId);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            onTabSelected={tab => setNewTab(tab)}
            currentTabId={selectedTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    </div>
  );
};

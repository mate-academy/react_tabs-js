import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const getPreparedTabs = (arr, query) => {
  const visibleTabs = [...arr];

  if (!query) {
    return visibleTabs;
  }

  return visibleTabs.filter(tab => tab.title === query);
};

export const App = () => {
  const [query, setQuery] = useState(tabs[0].title);
  const visibleTabs = getPreparedTabs(tabs, query);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {query}</h1>
      <div data-cy="TabsComponent">
        <Tabs
          filterTabs={visibleTabs}
          tabs={tabs}
          query={query}
          setQuery={setQuery}
        />
        {visibleTabs.map(tab => (
          <div className="block" data-cy="TabContent" key={tab.id}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

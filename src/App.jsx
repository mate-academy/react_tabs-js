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

export const App = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  const selectedTabById = tabs.find(tab => tab.id === selectedTab);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabById.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tabs
                tab={tab}
                key={tab.id}
                selectedTabId={(id) => {
                  setSelectedTab(id);
                }}
                selectedTab={selectedTab}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabById.content}
        </div>
      </div>
    </div>
  );
};

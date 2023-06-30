import React, { useState } from 'react';

import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const onTabSelected = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${onTabSelected.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>

            {tabs.map(tab => (
              <Tabs
                tab={tab}
                key={tab.id}
                selectedTabId={selectedTabId}
                setSelectedTabId={setSelectedTabId}
                data-cy="tab-content"
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {onTabSelected.content}
        </div>
      </div>
    </div>
  );
};

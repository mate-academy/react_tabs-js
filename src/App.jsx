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

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('Tab 1');

  const onTabSelected = (id) => {
    if(id) {
      switch (id) {
        case "Tab 1" : 
          return "Some text 1";
          break;
        case "Tab 2" :
          return "Some text 2";
          break;
        case "Tab 3" :
          return "Some text 3";
          break;
        default : 
          return "Some text 1";
      }
    }
  }

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTabId}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs tabs={tabs} setActiveTabId={setActiveTabId} activeTabId={activeTabId}></Tabs>
        </div>

        <div className="block" data-cy="TabContent">
          {onTabSelected(activeTabId)}
        </div>
      </div>
    </div>
  );
};

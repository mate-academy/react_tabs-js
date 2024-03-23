import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const selectedTab = [...tabsFromServer];
  const [activeTab, setActiveTab] = useState(selectedTab[0].id);
  const currTabInfo = tabsFromServer.find(tab => tab.id === activeTab);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currTabInfo.title}`}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={selectedTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="block" data-cy="TabContent">
          {currTabInfo.content}
        </div>
      </div>
    </div>
  );
};

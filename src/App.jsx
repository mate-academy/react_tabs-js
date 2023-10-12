import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Tabs } from './components/Tabs';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const firstElement = tabs[0];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(firstElement.id);
  const findTitle = tabs.find(el => el.id === selectedTabId).title
  || firstElement.title;

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${
          findTitle
        }`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={setSelectedTabId}
      />
    </div>
  );
};

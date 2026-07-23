import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import Tabs from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [isActive, setIsActive] = useState('tab-1');
  const [text, setText] = useState('Some text 1');
  const [value, setValue] = useState(tabs[0].title);

  const handleTableSelected = id => {
    const selected = tabs.find(tab => {
      return tab.id === id;
    });

    setText(selected.content);
    setValue(selected.title);
    setIsActive(selected.id);
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {value}</h1>
      <Tabs
        activeTabId={isActive}
        onTabSelected={handleTableSelected}
        tabs={tabs}
      />
      <div data-cy="TabsComponent">
        <div className="block" data-cy="TabContent">
          {text}
        </div>
      </div>
    </div>
  );
};

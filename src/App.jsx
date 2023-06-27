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

const getSelectedTab = (tabsArray, id) => {
  const foundTab = tabsArray.find(tab => tab.id === id);

  return foundTab !== undefined
    ? foundTab
    : tabsArray.find(tab => tab.id === 'tab-1');
};

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const { id, title, content } = getSelectedTab(tabs, selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tabs
                key={tab.id}
                tabId={tab.id}
                tabTitle={tab.title}
                activeId={id}
                setId={(selectedId) => {
                  setSelectedTabId(selectedId);
                }}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};

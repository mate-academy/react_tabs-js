import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tab = ({ tab, isSelected, onTabSelected }) => (
  <li
    className={`${isSelected(tab) ? 'is-active' : ''}`}
    data-cy="Tab"
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        if (!isSelected(tab)) {
          onTabSelected(tab.id);
        }
      }}
    >
      {tab.title}
    </a>
  </li>
);

export const Tabs = ({ tabsList, onTabSelected, selectedTabId }) => {
  const isSelected = tab => selectedTabId === tab.id;
  const selectedTab = tabsList.find(tab => tab.id === selectedTabId)
  || tabsList[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabsList.map(tab => (
              <Tab
                tab={tab}
                key={tab.id}
                isSelected={isSelected}
                onTabSelected={onTabSelected}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0]);

  return (
    <Tabs
      tabsList={tabs}
      onTabSelected={setSelectedTabId}
      selectedTabId={selectedTabId}
    />
  );
};

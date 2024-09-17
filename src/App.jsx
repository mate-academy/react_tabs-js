import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from 'react';
import cn from 'classnames';
import './App.scss';

export const tabs1 = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              className={cn({
                tabs__item: true,
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
              onClick={() => onTabSelected(tab.id)}
              key={tab.id}
            >
              <a className="tabs__link" href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(tabs1[0]);
  const onTabSelected = tabId => {
    setSelectedTab(tabs1.find(one => one.id === tabId));
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>

      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs1}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;

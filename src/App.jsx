import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classnames from 'classnames';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabSelected = (tabId) => {
    setSelectedTabId(tabId);
  };

  const selectedTabTitle = tabs.find(tab => tab.id === selectedTabId).title;
  const selectedTabContent = tabs.find(tab => tab.id === selectedTabId).content;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {selectedTabTitle}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={
                  classnames({ 'is-active': selectedTabId === tab.id })
                }
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContent}
        </div>
      </div>
    </div>
  );
};

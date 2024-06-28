// import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React, { useState } from 'react';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setactiveTabId] = useState('tab-1'); // Идентификатор активной вкладки

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tabs.id === activeTabId)?.title}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={activeTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                onClick={() => setactiveTabId(tab.id)} // Устанавливаем ID
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {activeTabId === tab.id ? tab.title : ''}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => (tabs.id = activeTabId))?.content}
        </div>
      </div>
    </div>
  );
};

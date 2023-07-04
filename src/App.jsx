import React, { useState } from 'react';
import cn from 'classnames';
import { TabContent } from './components/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTab, setSelected] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={cn({ 'is-active': selectedTab.id === tab.id })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href="#tab-1"
                    data-cy="TabLink"
                    onClick={() => {
                      setSelected(tab);
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <TabContent
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};

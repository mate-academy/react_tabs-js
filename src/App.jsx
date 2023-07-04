import React, { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selected, setSelected] = useState('tab-1');
  const [title, setTitle] = useState('');

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li
              className={cn({ 'is-active': selected === 'tab-1' })}
              data-cy="Tab"
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => {
                  setSelected('tab-1');
                }}
              >
                Tab 1
              </a>
            </li>

            <li
              data-cy="Tab"
              className={cn({ 'is-active': selected === 'tab-2' })}
            >
              <a
                href="#tab-2"
                data-cy="TabLink"
                onClick={() => {
                  setSelected('tab-2');
                }}
              >
                Tab 2
              </a>
            </li>

            <li
              data-cy="Tab"
              className={cn({ 'is-active': selected === 'tab-3' })}
            >
              <a
                href="#tab-3"
                data-cy="TabLink"
                onClick={() => {
                  setSelected('tab-3');
                }}
              >
                Tab 3
              </a>
            </li>
          </ul>
        </div>
        <Tabs
          selected={selected}
          tabs={tabs}
          sendTitle={setTitle}
        />
      </div>
    </div>
  );
};

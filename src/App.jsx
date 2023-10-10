import React, { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [value, setValue] = useState(1);
  const [message, setMessage] = useState(`Some text`);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is Tab {value}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li
              className={cn({ 'is-active': setValue })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  setValue(1);
                  setMessage(message);
                }}
                href="#tab-1"
                data-cy="TabLink"
              >
                Tab 1
              </a>
            </li>

            <li className={cn({ 'is-active': setValue })} data-cy="Tab">
              <a
                onClick={() => {
                  setValue(2);
                  setMessage(message);
                }}
                href="#tab-2"
                data-cy="TabLink"
              >
                Tab 2
              </a>
            </li>

            <li className={cn({ 'is-active': setValue })} data-cy="Tab">
              <a
                onClick={() => {
                  setValue(3);
                  setMessage(message);
                }}
                href="#tab-3"
                data-cy="TabLink"
              >
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {`${message} ${value}`}
        </div>
      </div>
    </div>
  );
};

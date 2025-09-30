import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <div className="section">
    <h1 className="title">Selected tab is {tabs.title}</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active" data-cy="Tab">
            <a href="#tab-1" data-cy="TabLink">
              {tabs[0].title}
            </a>
            {/* Link for Tab 1 */}
          </li>

          <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">
              Tab 2
            </a>
            {/* Link for Tab 2 */}
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">
              Tab 3
            </a>
            {/* Link for Tab 3 */}
          </li>
        </ul>
      </div>
    </div>
    <Tabs tabs={tabs} />
  </div>
);

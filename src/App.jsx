import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './constants';

export const App = () => (
  <div className="section">
    <h1 className="title">
      Selected tab is Tab
      {tabs.id}
    </h1>

    <Tabs key={tabs.id} />

    {/* <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active" data-cy="Tab">
            <a href="#tab-1" data-cy="TabLink">Tab 1</a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">Tab 2</a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">Tab 3</a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Some text 1
      </div>
    </div> */}
  </div>
);

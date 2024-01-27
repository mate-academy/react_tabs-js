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

const TakeTab = (tab) => {
  const tabContent = document.querySelector('.block');
  const tabTitle = document.querySelector('.title');
  const { title, content } = tabs.find(elem => elem.id === tab.id);

  tabContent.innerText = content;
  tabTitle.innerText = `Selected tab is ${title}`;
};

export const App = () => (
  <div className="section">
    <h1 className="title">
      Selected tab is Tab 1
    </h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <Tabs tabs={tabs} onTabSelected={TakeTab} />
      </div>

      <div className="block" data-cy="TabContent">
        Some text 1
      </div>
    </div>
  </div>
);

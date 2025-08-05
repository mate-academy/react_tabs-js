import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [nameTab, setNameTab] = useState('Tab 1')
  const [textTab, setTextTab] = useState('Some text 1')

  return (
  <div className="section">
      <h1 className="title">Selected tab is {nameTab}</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              < Tabs tab={tab}
                nameTable={(name) => setNameTab(name)}
                textTable={(text) => setTextTab(text)}
                nameTab={nameTab}
                key={tab.id} />

            ))}
        </ul>
      </div>

        <div className="block" data-cy="TabContent">
          {textTab}

      </div>
    </div>
  </div>

  )
}


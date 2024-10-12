// import React from 'react';
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
  const [selectItem, setSelectItem] = useState(tabs[0].id);
  const currentItem = tabs.filter(tab => tab.id === selectItem);

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentItem[0].title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tabs
                key={tab.id}
                tab={tab}
                select={selectItem}
                set={setSelectItem}
                currentItem={currentItem}
              />
            ))}
          </ul>
        </div>
        {selectItem && (
          <div className="block" data-cy="TabContent">
            {currentItem[0].content}
          </div>
        )}
      </div>
    </div>
  );
};

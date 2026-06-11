import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getTitleById = (tabsArr, id) => {
  if (id) {
    return tabsArr.find(tab => tab.id === id).title;
  }

  return tabsArr[0].title;
};

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');
  const title = getTitleById(tabs, activeTabId);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {title}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={id => {
          setActiveTabId(id);
        }}
      />
    </div>
  );
};

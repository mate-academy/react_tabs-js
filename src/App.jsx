import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { useState, React } from 'react';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setId] = useState(tabs[0].id);

  <div className="block" data-cy="TabContent">
    Some text 1
  </div>;

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${tabs.find(a => a.id === activeTabId).title}`}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={newID => {
          setId(newID);
        }}
      />
    </div>
  );
};

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';
import { tabs } from './contstants/tabs';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const { title } = tabs.find(({ id }) => id === activeTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {title}</h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

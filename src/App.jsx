import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const initialId = () => {
  const hash = window.location.hash.replace('#', '');

  return tabs.find(el => el.id === hash) || tabs[0];
};

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(initialId);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={data => setSelectedTabId(data)}
        data-cy="tab-content"
      />
    </div>
  );
};

import React, { useCallback, useState } from 'react';
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
  const [selTabIx, setSelTabIx] = useState(0);
  const [selTabId, setSelTabId] = useState(tabs[selTabIx].id);
  const [selTabTitle, setSelTabTitle] = useState(tabs[selTabIx].title);

  const callback = useCallback(paramTabId => {
    let paramtabIx = tabs.findIndex(x => x.id === paramTabId);

    if (paramtabIx >= tabs.length || paramtabIx < 0) {
      paramtabIx = 0;
    }

    setSelTabId(paramTabId);
    setSelTabIx(paramtabIx);
    setSelTabTitle(tabs[paramtabIx].title);
  });

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selTabTitle}`}</h1>
      <Tabs tabs={tabs} activeTabId={selTabId} onTabSelected={callback} />
    </div>
  );
};

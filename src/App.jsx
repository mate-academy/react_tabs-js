import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './constants/constants';
import { Tabs } from './components/Tabs';

export const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        changeTabFromTabs={tab => {
          setActiveTab(tab);
        }}
      />
    </div>
  );
};

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs } from './api/tabs';
import { Tabs } from './components/Tabs/Tabs';

function getAllTabs(datas, { currentTab }) {
  const newDatas = datas.map(newData => {
    if (currentTab === newData.title) {
      return { ...newData, isActive: true };
    }

    return { ...newData, isActive: false };
  });

  return newDatas;
}

export const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].title);
  const newTabs = getAllTabs(tabs, { currentTab });

  return (
    <div className="section">
      <h1 className="title">Selected tab is {currentTab}</h1>

      <Tabs newTabs={newTabs} setCurrentTab={setCurrentTab} />
    </div>
  );
};

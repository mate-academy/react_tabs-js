import React, { useState } from 'react'; // 🆕 додано useState
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id); // 🆕 стан активної вкладки

  const selectedTab = tabs.find(tab => tab.id === selectedTabId); // 🆕 знаходимо активну вкладку

  return (
    <div className="section">
      <h1 className="title" data-cy="SelectedTabTitle">
        {' '}
        {/* 🆕 додано data-cy */}
        Selected tab is {selectedTab.title} {/* 🔄 динамічний заголовок */}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(
              (
                tab, // 🆕 динамічний рендер вкладок
              ) => (
                <li
                  key={tab.id}
                  className={tab.id === selectedTabId ? 'is-active' : ''} // 🔄 активна вкладка
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={e => {
                      e.preventDefault(); // 🆕 зупиняємо перехід
                      setSelectedTabId(tab.id); // 🆕 встановлюємо активну вкладку
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content} {/* 🔄 динамічний контент вкладки */}
        </div>
      </div>
    </div>
  );
};

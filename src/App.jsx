import React, { useState } from 'react';
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
  // 1 Стейт (стан) додатка: [назва змінної, функція для її зміни].
  // useState(tabs[0].id) — ми кажемо React: "Спочатку активною буде вкладка 'tab-1'".
  // Це єдине джерело істини для всього додатка. Якщо activeTabId зміниться, все, що залежить від нього, автоматично оновиться.
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // 2 Обчислювальне значення: шукаємо повний об'єкт вкладки в масиві tabs.
  // Нам це потрібно тут, щоб вивести заголовок (activeTab.title) у тегу <h1>.
  // Оператор || tabs[0] — це страховка: якщо щось піде не так, ми не "впадемо", а покажемо першу вкладку.
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      {/* 3 Динамічний текст: завдяки тому, що ми знайшли activeTab вище,
          заголовок автоматично оновлюється при зміні стейту. */}
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      {/* 4 Виклик дочірнього компонента:
          - tabs: віддаємо дані.
          - activeTabId: кажемо, яку вкладку підсвітити.
          - onTabSelected: віддаємо функцію setActiveTabId "в оренду".
          Коли Tabs її викличе з новим ID,
          стан App оновиться, і все перемалюється.  */}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={setActiveTabId}
      />
    </div>
  );
};

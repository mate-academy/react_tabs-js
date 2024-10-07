// src/App.js
import React, { useState } from 'react';
import 'bulma/css/bulma.css'; // Підключення Bulma для стилів
import '@fortawesome/fontawesome-free/css/all.css'; // Підключення Font Awesome для іконок (якщо потрібно)
import './App.scss'; // Ваші власні стилі
import { Tabs } from './components/Tabs/Tabs'; // Правильний шлях імпорту Tabs компонента

// Визначаємо вкладки згідно з вимогами тестів
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  // Ініціалізуємо стан активної вкладки, за замовчуванням перша вкладка
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // Обробник вибору вкладки
  const handleTabSelected = id => {
    setActiveTabId(id);
  };

  // Знаходимо активну вкладку; якщо не знайдено, використовуємо першу
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      {/* Відображаємо заголовок активної вкладки */}
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      {/* Рендеримо Tabs компонент */}
      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabSelected={handleTabSelected}
        />
      </div>
    </div>
  );
};

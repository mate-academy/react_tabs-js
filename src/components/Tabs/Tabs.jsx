// src/components/Tabs/Tabs.js
import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Визначаємо активну вкладку; якщо не знайдено, використовуємо першу
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      {/* Рендеримо вкладки у списку */}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              {/* Додаємо посилання з data-cy="TabLink" */}
              <a
                href={`#${tab.id}`} // Посилання на вміст вкладки
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault(); // Запобігаємо стандартній поведінці посилання
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id); // Викликаємо колбек лише при виборі неактивної вкладки
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Відображаємо вміст активної вкладки */}
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

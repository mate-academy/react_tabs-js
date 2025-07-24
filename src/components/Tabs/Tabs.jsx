import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Визначаємо ID активної вкладки. Якщо activeTabId не знайдено в масиві tabs,
  // за замовчуванням встановлюємо ID першої вкладки, або null, якщо вкладок немає.
  const activeId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  // Знаходимо об'єкт активної вкладки для відображення її вмісту
  const activeTab = tabs.find(tab => tab.id === activeId);

  return (
    <div> {/* Цей зовнішній div був відсутній у вашому початковому фрагменті */}
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault(); // Запобігаємо стандартній поведінці посилання
                if (tab.id !== activeId) {
                  onTabSelected(tab.id); // Викликаємо передану функцію зворотного виклику при виборі нової вкладки
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Цей div був неправильно розміщений у вашому початковому коді */}
      <div className="block" data-cy="TabContent">
        {/* Відображаємо вміст активної вкладки */}
        {activeTab?.content}
      </div>
    </div> // Закриваючий тег для зовнішнього div
  );
};

import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // fallback: якщо activeTabId не знайдено в масиві, беремо перший таб
  const effectiveActiveId =
    tabs.find(t => t.id === activeTabId)?.id ?? tabs[0]?.id;
  const effectiveActiveTab = tabs.find(t => t.id === effectiveActiveId);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === effectiveActiveId ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault(); // блокуємо дефолтну поведінку <a>
                if (tab.id !== effectiveActiveId) {
                  onTabSelected(tab.id); // викликаємо колбек лише при виборі нового таба
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {effectiveActiveTab?.content}
      </div>
    </>
  );
};

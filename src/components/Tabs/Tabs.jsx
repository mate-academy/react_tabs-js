export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Знаходимо активну вкладку або використовуємо першу за замовчуванням
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault(); // Відміна стандартного переходу
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id); // Викликаємо callback тільки при зміні вкладки
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Контент активної вкладки */}
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

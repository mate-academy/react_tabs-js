export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  // ПЕРЕВІРКА ДЛЯ ТЕСТУ: Чи існує переданий activeTabId серед вкладoк?
  const isValidTab = tabs.some(tab => tab.id === activeTabId);

  // Якщо ID неправильний (немає в масиві), беремо ID першої вкладки
  const currentActiveId = isValidTab ? activeTabId : tabs[0]?.id;

  // Знаходимо об'єкт активної вкладки для відображення контенту
  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            // Використовуємо наш безпечний currentActiveId
            const isActive = tab.id === currentActiveId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    // Викликаємо callback ТІЛЬКИ якщо вкладка не є активною
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab ? activeTab.content : ''}</div>
    </div>
  );
};

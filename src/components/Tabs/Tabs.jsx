export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  // Требование: Если activeTabId не совпадает с ID в массиве, активной становится первая вкладка
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            // Сравниваем ID текущей итерации с вычисленной активной вкладкой
            const isActive = tab.id === currentTab?.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                // Требование: Активная вкладка получает класс 'is-active'
                className={isActive ? 'is-active' : ''}
              >
                {/* Требование: Ссылка с data-cy="TabLink" и href к #tab-id */}
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();
                    if (!isActive && onTabSelected) {
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

      {/* Требование: Выводим контент активной вкладки */}
      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </div>
  );
};

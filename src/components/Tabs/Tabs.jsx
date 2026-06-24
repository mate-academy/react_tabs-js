export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Отримуємо пропси від App:
  // - tabs: масив вкладок
  // - activeTabId: ID активної вкладки
  // - onTabSelected: функція для зміни активної

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            //  Перевіряю, чи ця вкладка активна
            const isActive = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
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

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

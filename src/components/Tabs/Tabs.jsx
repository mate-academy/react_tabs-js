import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Находим активную вкладку, по умолчанию выбираем первую вкладку, если activeTabId неверен
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  // Если activeTabId неверен, уведомляем родительский компонент о выборе первой вкладки
  if (!tabs.some(tab => tab.id === activeTabId)) {
    onTabSelected(activeTab.id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': activeTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={e => {
                  e.preventDefault();
                  // Проверяем, отличается ли выбранная вкладка от текущей активной вкладки
                  if (activeTab.id !== tab.id) {
                    // Вызываем функцию обратного вызова, чтобы уведомить родительский компонент
                    onTabSelected(tab.id);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

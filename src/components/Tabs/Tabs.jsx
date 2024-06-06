import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  if (!tabs.some(tab => tab.id === activeTabId)) {
    onTabSelected(activeTab.id);
  }

  const handleTabClick = tabId => {
    if (activeTab.id !== tabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({
                'is-active': activeTab.id === id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => handleTabClick(id)}
                href={`#${id}`}
                data-cy="TabLink"
              >
                {title}
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

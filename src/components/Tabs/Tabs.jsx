import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelect }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const selectTab = id => {
    if (id !== activeTab.id) {
      onTabSelect(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({ 'is-active': id === activeTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => selectTab(id)}
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

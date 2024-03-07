import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const selectedTabId = selectedTab.id;
  const activeTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': activeTab.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTabId !== tab.id && onTabSelected(tab)}
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

import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId = 'tab-1', onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const currentTabId = tabs.find(tab => tab.id === selectedTabId)
    ? selectedTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': currentTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => (currentTabId !== tab.id
                  ? onTabSelected(tab) : '')}
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
        {selectedTab.content}
      </div>
    </div>

  );
};

import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTabId = tabs.find(tab => tab.id === selectedTabId)?.id
    || tabs[0].id;

  const currentTab = tabs.find(tab => tab.id === currentTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === currentTabId,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => (
                  tab.id !== currentTabId && onTabSelected(tab)
                )}
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
        {currentTab.content}
      </div>
    </div>
  );
};

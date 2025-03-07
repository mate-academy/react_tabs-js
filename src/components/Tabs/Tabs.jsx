import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const validActiveTabId = tabs.some(tab => activeTabId === tab.id)
    ? activeTabId
    : tabs[0]?.id;
  const selectedTab = tabs.find(tab => tab.id === validActiveTabId) || {};

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === validActiveTabId,
              })}
            >
              <a
                onClick={() =>
                  tab.id !== validActiveTabId && onTabSelected(tab.id)
                }
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

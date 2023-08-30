import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const hasSelectedTab = id === selectedTab.id;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': hasSelectedTab,
                })}
                data-cy="Tab"
              >
                <a
                  onClick={() => !hasSelectedTab && onTabSelected(tab)}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

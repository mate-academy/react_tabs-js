import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.filter(
    tab => tab.id.includes(selectedTabId),
  )[0] || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={cn({ [`is-active`]: tab.id === selectedTab.id })}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (tab !== selectedTab) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};

import cn from 'classnames';

export const Tabs = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
  || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isTabChange = selectedTabId !== tab.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': selectedTab === tab })}
                data-cy="Tab"
              >
                <a
                  onClick={() => (isTabChange && onTabSelected(tab))}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })
          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

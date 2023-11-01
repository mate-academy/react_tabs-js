import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const allTabs = tabs;

  const handleChangeTab = tab => selectedTabId !== tab.id && onTabSelected(tab);

  const selectedTab = allTabs.findIndex(item => selectedTabId === item.id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {allTabs.map((tab, index) => (
            <li
              className={cn({
                'is-active': selectedTabId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleChangeTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {allTabs[selectedTab].content}
      </div>
    </div>
  );
};

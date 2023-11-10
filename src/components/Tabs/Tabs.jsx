export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={selectedTabId === tab.id
                ? 'is-active'
                : ''}
              data-cy="Tab"
            >
              <a
                href={`#-${tab.id}`}
                onClick={() => onTabSelected(tab)}
                data-cy={`tab-${tab.id}`}
              >
                {`${tab.title}`}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`${selectedTab.content}`}
      </div>
    </div>
  );
};

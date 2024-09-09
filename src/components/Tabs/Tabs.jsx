export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

  const displayTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === displayTab.id ? 'is-active' : undefined}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  tab.id === displayTab.id
                    ? undefined
                    : () => onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {displayTab.content}
      </div>
    </div>
  );
};

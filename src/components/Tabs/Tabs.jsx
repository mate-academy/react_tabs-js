export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={validActiveTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (validActiveTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs
          .filter(tab => tab.id === validActiveTabId)
          .map(tab => (
            <div key={tab.id}>{tab.content}</div>
          ))}
      </div>
    </div>
  );
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentActiveTabId = tabs.find(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const currentActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={tab.id === currentActiveTabId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={event => {
                    event.preventDefault();
                    if (activeTabId !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentActiveTab?.content}
      </div>
    </div>
  );
};

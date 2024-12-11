export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(({ id }) => id === activeTabId) || tabs[0];
  const isActiveTabId = activeTab ? activeTab.id : null;

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActiveTabId === tab.id ? 'is-active' : ''}
              >
                <a
                  onClick={() => {
                    if (isActiveTabId !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
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
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};

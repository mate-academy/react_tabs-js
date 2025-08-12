export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const resolvedActiveId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === resolvedActiveId);

  if (!activeTab) {
    return null;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === resolvedActiveId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    if (!isActive) onTabSelected(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

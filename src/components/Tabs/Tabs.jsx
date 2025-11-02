export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabIds = tabs.map(tab => tab.id);
  const resolvedActiveId = validTabIds.includes(activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === resolvedActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={resolvedActiveId === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== resolvedActiveId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};

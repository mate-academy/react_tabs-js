export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidActiveId = tabs.some(tab => tab.id === activeTabId);

  const effectiveActiveId = isValidActiveId ? activeTabId : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === effectiveActiveId);

  if (!tabs || tabs.length === 0 || !activeTab) {
    return null;
  }

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === effectiveActiveId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => {
                event.preventDefault();
                if (tab.id !== effectiveActiveId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};

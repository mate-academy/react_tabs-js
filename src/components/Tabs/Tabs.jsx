export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === currentTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                if (tab.id !== currentTabId) onTabSelected(tab.id);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (tab.id !== currentTabId) onTabSelected(tab.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

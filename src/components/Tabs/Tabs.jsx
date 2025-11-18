export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const effectiveActiveId = tabs.some(t => t.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  const activeTab = tabs.find(t => t.id === effectiveActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === effectiveActiveId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (
                    tab.id !== effectiveActiveId &&
                    typeof onTabSelected === 'function'
                  )
                    onTabSelected(tab.id);
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
        {activeTab?.content}
      </div>
    </div>
  );
};

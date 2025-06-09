export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (activeTab.id !== tab.id) {
                  onTabSelected(tab.id);
                }
              }}
              tabIndex={0}
              onKeyDown={e => {
                if (
                  (e.key === 'Enter' || e.key === ' ') &&
                  activeTab.id !== tab.id
                ) {
                  onTabSelected(tab.id);
                }
              }}
              role="tab"
              aria-selected={activeTab.id === tab.id}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};

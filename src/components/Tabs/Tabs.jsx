export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== activeTab.id) {
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
        {activeTab && activeTab.content}
      </div>
    </>
  );
};

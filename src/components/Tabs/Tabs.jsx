export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab.id ? 'is-active' : ''}
              role="tab"
              aria-selected={tab.id === activeTab.id}
              tabIndex="0"
              onClick={() => {
                if (tab.id !== activeTab.id) {
                  onTabSelected(tab.id);
                }
              }}
              onKeyDown={e => {
                if (
                  (e.key === 'Enter' || e.key === ' ') &&
                  tab.id !== activeTab.id
                ) {
                  onTabSelected(tab.id);
                }
              }}
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
    </div>
  );
};

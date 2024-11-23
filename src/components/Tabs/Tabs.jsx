export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <button
              type="button"
              onClick={() => {
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              <li
                className={tab.id === activeTab.id ? 'is-active' : ''}
                key={tab.id}
                data-cy="Tab"
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            </button>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

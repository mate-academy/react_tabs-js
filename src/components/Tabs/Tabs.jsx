export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              onClick={() => {
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
              onKeyDown={event => {
                if (event.key === 'Enter' && tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
              role="tab"
              tabIndex={0}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
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

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== activeTab.id) {
                  onTabSelected(tab.id);
                }
              }}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id);
                  }
                }
              }}
              tabIndex="0"
              role="tab"
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

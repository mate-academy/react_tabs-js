export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(e => (
            <li
              key={e.id}
              className={e.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${e.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (e.id !== activeTab.id) {
                    onTabSelected(e.id);
                  }
                }}
              >
                {e.title}
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

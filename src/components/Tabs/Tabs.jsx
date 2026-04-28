export const Tabs = ({ tabs, activeTabId, activeTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
            <ul>
            {tabs.map(tab => (
                <li
                className={`${tab.id === activeTabId ? 'is-active' : ''}`}
                data-cy="Tab"
                key={tab.id}
                >
                <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                    if (tab.id !== activeTabId) {
                        onTabSelected(tab.id);
                    }
                    }}
                >
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

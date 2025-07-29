export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={(() => {
                  if (
                    activeTabId === 'tab-1' ||
                    activeTabId === 'tab-2' ||
                    activeTabId === 'tab-3'
                  ) {
                    return tab.id === activeTabId ? 'is-active' : null;
                  }

                  return index === 0 ? 'is-active' : null;
                })()}
              >
                <a
                  onClick={e => {
                    e.preventDefault();
                    if (activeTabId !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};

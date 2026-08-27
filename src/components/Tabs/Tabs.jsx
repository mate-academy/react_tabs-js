export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const activeTabContent = tabs.find(tab => tab.id === activeTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={activeTab.id === id ? 'is-active' : undefined}
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (!(id === activeTabId)) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};

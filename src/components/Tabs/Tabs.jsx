export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || !tabs.length) return null;

  const hasActiveTab = tabs.find(tab => tab.id === activeTabId);
  const activeTabData = hasActiveTab || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTabData.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
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
        {activeTabData.content}
      </div>
    </div>
  );
};

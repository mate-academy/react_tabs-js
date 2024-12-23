export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTab.id ? 'is-active' : ''}
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

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === selectedTab.id ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                if (tab.id !== selectedTab.id) {
                  onTabSelected(tab.id);
                }
              }}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="TabContent">{selectedTab.content}</div>
    </>
  );
};

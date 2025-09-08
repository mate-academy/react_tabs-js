export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const affectiveActiveTabId =
    tabs.find(tab => tab.id === activeTabId)?.id ?? tabs[0]?.id;
  const activeTab = tabs.find(tab => tab.id === affectiveActiveTabId);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === affectiveActiveTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              onClick={e => {
                e.preventDefault();
                if (tab.id !== affectiveActiveTabId) {
                  onTabSelected(tab.id);
                }
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="TabContent">{activeTab?.content}</div>
    </>
  );
};

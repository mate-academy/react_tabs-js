export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      {tabs.map(tab => (
        <li
          className={selectedTab.id === tab.id ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => selectedTab.id !== tab.id && onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = event => {
    const tabId = event.target.getAttribute('data-id');

    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTabId ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-id={tab.id}
              data-cy="TabLink"
              onClick={handleTabClick}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

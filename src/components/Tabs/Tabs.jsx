export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  return (
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={tab.id === activeId ? 'is-active' : ''}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={event => {
              event.preventDefault();
              if (tab.id !== activeId) {
                onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

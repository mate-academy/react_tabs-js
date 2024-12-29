export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={validTabId === tab.id ? 'is-active' : ''}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              if (validTabId !== tab.id) {
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

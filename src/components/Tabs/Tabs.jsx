export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={tab.id === activeTabId ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={event => {
              event.preventDefault();
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
            key={tab.id}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

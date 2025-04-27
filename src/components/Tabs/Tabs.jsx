export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={activeTabId === tab.id ? 'is-active' : ''}
        >
          <a
            data-cy="TabLink"
            href={`#${tab.id}`}
            onClick={event => {
              event.preventDefault();
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
  );
};

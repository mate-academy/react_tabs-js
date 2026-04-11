export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => {
        const isActive = tab.id === activeTabId ? `is-active` : '';

        return (
          <li className={isActive} data-cy="Tab" key={tab.id}>
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => {
                event.preventDefault();
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

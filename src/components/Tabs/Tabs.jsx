export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === active.id;

          return (
            <li
              key={tab.id}
              className={isActive ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (!isActive) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div data-cy="TabContent">{active.content}</div>
    </div>
  );
};

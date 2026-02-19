export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === active.id ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                if (tab.id !== active.id) onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="TabContent">{active && active.content}</div>
    </div>
  );
};

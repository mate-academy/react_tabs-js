export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(j => j.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(i => (
          <li
            data-cy="Tab"
            key={i.id}
            className={i.id === activeTabId ? 'is-active' : ''}
          >
            <a
              data-cy="TabLink"
              href={`#${i.id}`}
              onClick={e => {
                e.preventDefault();
                if (i.id !== activeTabId) onTabSelected(i.id);
              }}
            >
              {i.title}
            </a>
          </li>
        ))}
      </ul>

      <div data-cy="TabContent">{active && active.content}</div>
    </div>
  );
};

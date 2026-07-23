export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => {
          return (
            <li
              key={t.id}
              className={activeTabId === t.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                onClick={() => {
                  if (activeTabId !== t.id) {
                    onTabSelected(t.id);
                  }
                }}
                data-cy="TabLink"
              >
                {t.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

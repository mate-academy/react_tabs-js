export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={tab.id === id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== id) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.content}
      </div>
    </div>
  );
};

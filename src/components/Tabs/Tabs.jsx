export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === active.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="block" data-cy="TabContent">
          {active.content}
        </div>
      </div>
    </div>
  );
};

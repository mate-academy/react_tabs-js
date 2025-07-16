export const Tabs = ({ activeTabId, onTabSelected, tabs }) => {
  const isValidId = tabs.some(t => t.id === activeTabId);
  const realActiveTabId = isValidId ? activeTabId : tabs[0]?.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={realActiveTabId === tab.id ? 'is-active' : ''}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
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
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === realActiveTabId)?.content}
      </div>
    </div>
  );
};

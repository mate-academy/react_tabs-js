export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
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
        {(tabs.find(tab => tab.id === activeTabId) || tabs[0]).content}
      </div>
    </div>
  );
};

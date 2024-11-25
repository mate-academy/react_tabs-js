export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabOrFirstId = tabs.find(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={`${activeTabOrFirstId === tab.id ? 'is-active' : ''}`}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeTabOrFirstId !== tab.id) {
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
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabOrFirstId).content}
      </div>
    </div>
  );
};

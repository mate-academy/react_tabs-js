export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const chooseTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                className={tab.id === chooseTab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => (
                    tab.id !== selectedTabId && (
                      onTabSelected(tab)
                    )
                  )}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.map(tab => (
            selectedTabId === tab.id && (
              tab.content
            )
          ))
        }
      </div>
    </div>
  );
};

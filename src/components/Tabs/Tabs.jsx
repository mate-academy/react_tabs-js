export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const foundTab = tabs.find(tab => tab.id === activeTabId);
  const activeTab = foundTab || tabs[0];
  const realActiveTabId = foundTab ? activeTabId : tabs[0].id;

  return (
    <>
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={tab.id === realActiveTabId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== realActiveTabId) {
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
          {activeTab.content}
        </div>
      </div>
    </>
  );
};

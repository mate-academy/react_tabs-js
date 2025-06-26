export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is {currentTab.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={currentTab.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    if (currentTab.id !== tab.id) {
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
          {currentTab.content}
        </div>
      </div>
    </>
  );
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div className="tabs is-boxed">
        <div data-cy="TabsComponent">
          <ul>
            {tabs.map(tab => {
              return (

                <li
                  key={tab.id}
                  className={tab.id === activeTab.id ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={(event) => {
                      event.preventDefault();
                      if (tab.id !== activeTab.id) {
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
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};

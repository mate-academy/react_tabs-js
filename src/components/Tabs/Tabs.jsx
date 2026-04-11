export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={tab === activeTab ? 'is-active' : ''}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href="#tab-1"
                    data-cy="TabLink"
                    onClick={e => {
                      e.preventDefault();
                      onTabSelected(tab.id);
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
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};

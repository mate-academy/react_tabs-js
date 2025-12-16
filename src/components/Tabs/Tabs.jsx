export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              return (
                <li className={activeTabId === tab.id ? 'is-active' : '' }
                  key={tab.id}
                  data-cy="Tab"
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <a href={`#${tab.id}`}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </a>
                </li>
              )
            })

          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>

    </div>
  )
};

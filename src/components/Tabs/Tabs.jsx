export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

  //let activeTabId2 = activeTabId;

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = id => {
    if (id === activeTabId) {
      return;
    }

    onTabSelected(id);
  };

  //const changeActiveTabId = () => {
  //  if(activeTabId !== 'tab-1' && activeTabId !== 'tab-2' && activeTabId !== 'tab-3') {
  //    activeTabId2 = tabs[0].id;
  //  }
  //};

  return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={tab.id === activeTab.id ? 'is-active' : ''}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={e => {
                      e.preventDefault();
                      handleClick(tab.id);
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
  );
};

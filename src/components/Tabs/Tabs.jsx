export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const safeTabs = Array.isArray(tabs) ? tabs : [];

  const activeTab = safeTabs.find(tab => tab.id === activeTabId) || safeTabs[0];
  const activeId = activeTab ? activeTab.id : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {safeTabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeId) {
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
        {activeTab ? activeTab.content : null}
      </div>
    </div>
  );
};

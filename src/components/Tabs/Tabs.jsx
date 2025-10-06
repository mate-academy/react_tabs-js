export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return <div data-cy="TabsComponent" />;
  }

  const foundTab = tabs.find(tab => tab.id === activeTabId);

  const activeTabInfo = foundTab || tabs[0];

  const currentActiveId = activeTabInfo.id;

  function onActiveTabSelected(id) {
    onTabSelected(id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === currentActiveId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== currentActiveId) {
                    onActiveTabSelected(tab.id);
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
        {activeTabInfo.content}
      </div>
    </div>
  );
};

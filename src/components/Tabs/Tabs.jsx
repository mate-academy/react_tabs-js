export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={() =>
                  tab.id !== validActiveTabId && onTabSelected(tab.id)
                }
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === validActiveTabId)?.content ||
          'Content not available'}
      </div>
    </div>
  );
};

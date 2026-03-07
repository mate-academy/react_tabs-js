export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTab = tabs.find(tab => tab.id === activeTabId);
  const currentTabId = validTab ? activeTabId : tabs[0]?.id;
  const currentTabContent = validTab ? validTab.content : tabs[0]?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === currentTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  tab.id === currentTabId
                    ? undefined
                    : () => onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTabContent}
      </div>
    </>
  );
};

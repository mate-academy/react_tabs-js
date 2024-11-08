/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={
                activeTab
                  ? tab.id === activeTabId
                    ? 'is-active'
                    : ''
                  : tabs[0].id === tab.id
                    ? 'is-active'
                    : ''
              }
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() =>
                  tab.id !== activeTabId ? onTabSelected(tab.id) : undefined
                }
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : null}
    </div>
  );
};

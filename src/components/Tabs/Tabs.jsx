import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === activeId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === activeId })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
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
        {activeTab.content}
      </div>
    </div>
  );
};

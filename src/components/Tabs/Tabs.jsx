import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const checkedSelectedTab = tabs.some(item => item.id === activeTabId)
    ? activeTabId
    : tabs[0].id;
  const activeTab = tabs.find(t => t.id === checkedSelectedTab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              className={classNames({
                'is-active': checkedSelectedTab === t.id,
              })}
              data-cy="Tab"
              key={t.id}
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={() =>
                  checkedSelectedTab !== t.id ? onTabSelected(t.id) : {}
                }
              >
                Tab {t.id.split('-')[1]}
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

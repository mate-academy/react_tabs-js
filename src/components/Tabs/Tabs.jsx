import cn from 'classnames';

export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  const activeTab =
    activeTabId && tabs.find(tab => tab.id === activeTabId)
      ? activeTabId
      : tabs[0].id;

  const currentTab = tabs.find(tab => tab.id === activeTab);

  function activateTab(tab) {
    return activeTab !== tab.id && onTabSelected(tab.id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': activeTab === id })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    activateTab(tab);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

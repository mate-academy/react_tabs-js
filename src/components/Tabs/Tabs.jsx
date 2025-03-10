import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let usableActiveTabId = activeTabId;

  if (!tabs.some(tab => tab.id === activeTabId)) {
    usableActiveTabId = tabs[0].id;
  }

  const activeTab = tabs.find(tab => tab.id === usableActiveTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': tab.id === usableActiveTabId })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  // onClick={() => onTabSelected(tab.id)}
                  onClick={() => {
                    if (usableActiveTabId !== tab.id) {
                      return onTabSelected(tab.id);
                    }

                    return '';
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

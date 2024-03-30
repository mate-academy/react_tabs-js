import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const visibleTabId =
    tabs.findIndex(tab => tab.id === selectedTabId) > -1
      ? selectedTabId
      : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={cn({
                    'is-active': tab.id === visibleTabId,
                  })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (tab.id !== visibleTabId) onTabSelected(tab);
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === visibleTabId).content}
      </div>
    </div>
  );
};

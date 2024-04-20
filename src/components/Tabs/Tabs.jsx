import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const visibleTab = tabs.find(tab => tab.id === selectedTabId);
  const visibleTabId = visibleTab ? visibleTab.id : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const isTabSelected = tab.id === visibleTabId;

              return (
                <li
                  key={tab.id}
                  className={cn({
                    'is-active': isTabSelected,
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

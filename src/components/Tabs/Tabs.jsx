import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const href = `#${id}`;

            return (
              <li
                className={cn({ 'is-active': activeTab.id === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={href}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeTabId) {
                      onTabSelected(id);
                    }
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
        {activeTab.content}
      </div>
    </div>
  );
};

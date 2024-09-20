import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected: chosen }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const active = id => activeTab.id !== id && chosen(id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={cn({ 'is-active': id === activeTab.id })}
              >
                <a href={`#${id}`} data-cy="TabLink" onClick={() => active(id)}>
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

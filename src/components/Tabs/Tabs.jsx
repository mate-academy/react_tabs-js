import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const isActive = id => id === activeTab.id;
  const handleTab = tab => (!isActive(tab.id) && onTabSelected(tab));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }, i) => (
            <li
              key={id}
              className={cn({ 'is-active': isActive(id) })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTab(tabs[i])}
              >
                {title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

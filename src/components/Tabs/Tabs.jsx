import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(({ id }) => id === activeTabId) || tabs[0];

  const handleClick = (targetId, targetTitle) => {
    if (targetId !== activeTab.id) {
      onTabSelected(targetId, targetTitle);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              key={id}
              className={cn({ 'is-active': id === activeTab.id })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleClick(id, title)}
              >
                {title}
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

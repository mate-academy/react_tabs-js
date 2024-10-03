import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleTabClick = id => {
    if (activeTabId !== id) {
      onTabSelected(id);
    }
  };

  const tabContent = !activeTab ? tabs[0].content : activeTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }, index) => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': activeTabId === id || (index === 0 && !activeTab),
              })}
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};

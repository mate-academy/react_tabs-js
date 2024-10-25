import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  
  const handleTabClick = (tabId) => {
    if (tabId !== activeTab.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({id, title}) => (
            <li
              className={classNames({
                'is-active': activeTab.id === id,
              })}
              data-cy="Tab"
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
        {activeTab.content}
      </div>
    </div>
  );
};

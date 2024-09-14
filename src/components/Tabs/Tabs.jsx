import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTab }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const onTabClick = tabId => {
    if (tabId !== activeTab.id) {
      setActiveTab(tabId);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': activeTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabClick(tab.id)}
              >
                {tab.title}
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

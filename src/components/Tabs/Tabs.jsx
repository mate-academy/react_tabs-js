import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = (tabId, event) => {
    event.preventDefault();
    if (activeTabId !== tabId) {
      onTabSelected(tabId);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': id === activeTab.id })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={event => handleTabClick(id, event)}
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

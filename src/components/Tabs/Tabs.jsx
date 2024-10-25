import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const { id: selectedTabId, content } =
    tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleSelectedTab = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classNames({ 'is-active': id === selectedTabId })}
              data-cy="Tab"
            >
              <a
                onClick={() => handleSelectedTab(id)}
                href={`#${id}`}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};

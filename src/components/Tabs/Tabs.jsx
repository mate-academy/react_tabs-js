import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  const selectedTabContent = tabs.find(val => val.id === selectedTabId).content;

  const handleTabClick = tabId => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabId })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  handleTabClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};

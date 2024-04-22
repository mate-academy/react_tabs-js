import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabSelected = tabId => {
    if (activeTabId !== tabId) {
      onTabSelected(tabId);
    }
  };

  const currentTab = tabs.find(tab => tab.id === activeTabId);
  const activeTab = currentTab ? currentTab.id : tabs[0].id;
  const activeContent = currentTab ? currentTab.content : tabs[0].content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === activeTab })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent}
      </div>
    </div>
  );
};

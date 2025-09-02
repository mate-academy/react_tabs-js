import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  function handleTabClick(tabId) {
    if (activeTabId !== tabId) {
      onTabSelected(tabId);
    }
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn({ 'is-active': tab.id === activeTabId })}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : null}
      </div>
    </div>
  )
};

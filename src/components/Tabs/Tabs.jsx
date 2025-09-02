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
            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
            <li
              data-cy="Tab"
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn({ 'is-active': tab.id === activeTab.id })}
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
  );
};

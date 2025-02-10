import { getContent } from '../../utils';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isActive = tabId => {
    if (activeTabId === tabId) return true;

    const isActiveTabInTabs = tabs.some(tab => tab.id === activeTabId);

    return isActiveTabInTabs ? activeTabId === tabId : tabId === tabs[0].id;
  };

  const handleTabClick = tabId => {
    if (tabId === activeTabId) return;

    onTabSelected(tabId);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={isActive(tab.id) ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getContent(tabs, activeTabId, 'content')}
      </div>
    </div>
  );
};

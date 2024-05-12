import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let correctActiveTabId = activeTabId;

  if (!tabs.some(tab => tab.id === activeTabId)) {
    correctActiveTabId = tabs[0].id;
  }

  const handleActiveTab = tab => {
    if (tab.id !== correctActiveTabId) {
      return () => onTabSelected(tab.id);
    }

    return undefined;
  };

  const getActiveTabContent = () => {
    const activeTabIndex = tabs.findIndex(tab => tab.id === correctActiveTabId);

    return tabs[activeTabIndex].content;
  };

  const activeTabContent = getActiveTabContent();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': tab.id === correctActiveTabId })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={handleActiveTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, setTab }) => {
  const selectedTab = tabs.find(tab => (tab.id === selectedTabId)) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn(
                { 'is active': selectedTab === tab.id },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab !== tab.id) {
                    setTab(tab);
                  }
                }
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

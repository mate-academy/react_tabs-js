import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(item => item.id === activeTabId) || tabs[0];
  const handleSelectTab = (selectedTab, id) => {
    if (!selectedTab) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const ifTabSelected = activeTab.id === tab.id;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={cn({ 'is-active': ifTabSelected })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelectTab(ifTabSelected, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

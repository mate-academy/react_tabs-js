import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleSelectedTab = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === selectedTab.id;

            return (
              <li
                key={tab.id}
                className={cn({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelectedTab(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

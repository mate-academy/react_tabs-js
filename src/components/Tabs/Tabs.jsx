import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelect }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTab) || tabs[0];
  const onTabClick = (tab) => {
    if (tab.id === selectedTab.id) {
      return;
    }

    onTabSelect(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelectedTab = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelectedTab })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabClick(tab)}
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

import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const handleClick = tab => {
    if (tab.id !== activeTabId) {
      onTabSelected(tab.id);
    }
  };

  const currentTab = tabs.find(el => el.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
                className={cn({
                  'is-active': tab.id === currentTab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  onClick={() => handleClick(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

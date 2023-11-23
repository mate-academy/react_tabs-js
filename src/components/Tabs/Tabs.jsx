import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab
    = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const handleClick = (tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
            >
              <a
                key={tab.id}
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};

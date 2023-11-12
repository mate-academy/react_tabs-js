import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  setSelectedTabId,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];
  const onTabSelect = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn(selectedTabId === tab.id ? 'is-active' : '')}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onTabSelect(tab)}
                data-cy="TabLink"
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

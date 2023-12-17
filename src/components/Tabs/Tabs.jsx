import cn from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => {
  const activeTab = selectedTab || tabs[0];

  const onTabSelectTabHandle = tab => () => {
    const selectedId = activeTab.id;

    if (tab.id !== selectedId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === activeTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={
                  onTabSelectTabHandle(tab)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>

  );
};

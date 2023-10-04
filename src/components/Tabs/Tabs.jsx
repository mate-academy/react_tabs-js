import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': selectTab.id === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => (
                  selectTab.id === tab.id ? '' : onTabSelected(tab)
                )}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab.content}
      </div>
    </div>
  );
};

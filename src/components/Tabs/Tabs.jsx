import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const tabClick = (t) => {
    if (selectedTabId !== t.id) {
      onTabSelected(t);
    }
  };

  const selectedTab = tabs.find(t => selectedTabId === t.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              className={cn(selectedTab.id === t.id && 'is-active')}
              data-cy="Tab"
              key={t.id}
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(t)}
              >
                {t.title}
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

import cn from 'classnames';

export function Tabs({
  tabs,
  selectedTab,
  onTabSelected,
}) {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': (tab === selectedTab) })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if ((tab !== selectedTab)) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
}

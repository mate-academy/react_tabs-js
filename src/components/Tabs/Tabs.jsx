import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({
              'is-active': selectedTabId === tab.id,
            })}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                onTabSelected(tab.id);
              }}
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

import cn from 'classnames';

export const Tabs = ({
  tabs,
  defaultTab,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({
              'is-active': selectedTabId.id === tab.id,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => selectedTabId !== tab && onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTabId
        ? selectedTabId.content
        : defaultTab.content
      }
    </div>
  </div>
);

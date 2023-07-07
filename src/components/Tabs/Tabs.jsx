import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            className={cn({
              'is-active': selectedTabId === tab.id
              || (index === 0 && !tabs.some(t => t.id === selectedTabId)),
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </div>
  </div>
);

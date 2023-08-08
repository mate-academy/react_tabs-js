import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  selectedTab,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn(
              { 'is-active': tab.id === selectedTabId },
            )}
            data-cy="Tab"
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab.id);
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
      {selectedTab.content}
    </div>
  </div>
);

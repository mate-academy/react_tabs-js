import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isTabAction = tab.id === selectedTab.id;

          return (
            <li
              key={tab.id}
              className={cn({ 'is-active': isTabAction })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (!isTabAction) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);

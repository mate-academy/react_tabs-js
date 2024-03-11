import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isAction = tab === selectedTab;

          return (
            <li
              key={tab.id}
              className={cn({ 'is-active': isAction })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (!isAction) {
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

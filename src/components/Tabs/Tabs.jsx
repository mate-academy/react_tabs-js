import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const tabId = tab.id;

          return (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab === tab })}
              key={tabId}
            >
              <a
                href={`#${tabId}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab !== tab) {
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

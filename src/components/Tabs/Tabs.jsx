import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tabItem => (
              <li
                className={classNames({
                  'is-active': selectedTab.id === tabItem.id,
                })}
                data-cy="Tab"
                key={tabItem.id}
              >
                <a
                  href={`#${tabItem.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTab.id !== tabItem.id) {
                      onTabSelected(tabItem);
                    }
                  }}
                >
                  {tabItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};

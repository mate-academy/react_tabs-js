import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabId = selectedTab.id === tab.id;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={cn({ 'is-active': isTabId })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isTabId) {
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
};

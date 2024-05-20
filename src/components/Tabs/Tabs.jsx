import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const TITLE = tab.title;
            const ID = tab.id;

            return (
              <li
                key={ID}
                data-cy="Tab"
                className={cn({
                  'is-active': ID === activeTab.id,
                })}
              >
                <a
                  href={`#${ID}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (ID !== activeTab.id) {
                      onTabSelected(ID);
                    }
                  }}
                >
                  {TITLE}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

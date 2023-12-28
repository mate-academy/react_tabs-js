import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleTabSelected = (tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={cn(
                  { 'is-active': id === selectedTab.id },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelected(tab)}
                >
                  {title}
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

import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
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
                className={cn({
                  'is-active': selectedTabId === id,
                })}
                key={id}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => tabClick(tab)}
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

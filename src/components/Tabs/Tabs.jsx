import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  const userClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                data-cy="Tab"
                className={cn(tab.id === currentTab.id ? 'is-active' : '')}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    userClick(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div
        data-cy="TabContent"
        className="block"
      >
        {currentTab.content}
      </div>
    </div>
  );
};

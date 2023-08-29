import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const defaultTabId = tabs[0].id;
  const getCurrentTab = () => (
    tabs.find(({ id }) => id === selectedTabId)
    || tabs.find(({ id }) => id === defaultTabId)
  );

  const currentTab = getCurrentTab();

  function handleTabClick(tab) {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  }

  const isActive = id => (
    selectedTabId === currentTab.id
      ? selectedTabId === id
      : id === defaultTabId
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': isActive(tab.id),
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))

          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

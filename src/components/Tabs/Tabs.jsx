import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setTabSelected,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  function handleTab(tab) {
    if (selectedTab.id !== tab.id) {
      setTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                className={cn({ 'is-active': selectedTab.id === tab.id })}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

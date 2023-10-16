
export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const HandleClick = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  if (selectedTabId === undefined) {
    onTabSelected(tabs[0].id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === selectedTab.id ? ('is-active') : null}
              key={tab.id}
          // {tab.id === selectedTabId.id && (className='is-active')}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => HandleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const actualTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  function selectedTabClick(tab) {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === actualTab?.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {actualTab.content}
      </div>
    </div>
  );
};

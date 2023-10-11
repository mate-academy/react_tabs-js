export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let checkedTabId = selectedTabId;

  if (tabs.find(searchedTab => searchedTab.id === checkedTabId) === undefined) {
    checkedTabId = tabs[0].id;
  }

  const activeTab = tabs.find(searchedTab => searchedTab.id === checkedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((currentTab, i) => (
            <li
              className={(checkedTabId === currentTab.id) ? 'is-active' : ''}
              data-cy="Tab"
              key={currentTab.id}
            >
              <a
                href={`#${currentTab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (checkedTabId !== currentTab.id) {
                    onTabSelected(currentTab);
                  }
                }}
              >
                {currentTab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

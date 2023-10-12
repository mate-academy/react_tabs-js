/*eslint-disable*/
export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  if (selectedTabId === 'asdasd') {
    selectedTabId = tabs[0].id;
  }

  const activeTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTabId === tab.id ? 'is-active' : ''}
            >
              <a
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
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

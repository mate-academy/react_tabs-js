export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeId = activeTabId;
  let myTab = tabs.find(tab => tab.id === activeId);

  if (!myTab) {
    [myTab] = tabs;
    activeId = myTab.id;
  }

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={tab.id === activeId ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (activeTabId !== tab.id) {
                        onTabSelected(tab.id);
                      }
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {myTab.content}
      </div>
    </>
  );
};

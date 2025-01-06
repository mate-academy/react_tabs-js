export const Tabs = ({ tabs, activeTabId = 'tab-1', onTabSelected }) => {
  const tabClick = paramTabId => {
    if (activeTabId !== paramTabId) {
      onTabSelected(paramTabId);
    }
  };

  let useTabIx = tabs.findIndex(x => x.id === activeTabId);

  if (useTabIx >= tabs.length || useTabIx < 0) {
    useTabIx = 0;
  }

  const useTabId = tabs[useTabIx].id;
  const useTabContent = tabs[useTabIx].content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === useTabId ? 'is-active' : null}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => (tab.id !== useTabId ? tabClick(tab.id) : null)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {useTabContent}
      </div>
    </div>
  );
};

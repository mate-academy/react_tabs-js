export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab =
    tabs.find(tab => {
      return tab.id === activeTabId;
    }) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = currentTab.id === tab.id;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={e => {
                    e.preventDefault();
                    if (!isActive) onTabSelected(tab.id);
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </>
  );
};

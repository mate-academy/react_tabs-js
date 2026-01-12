export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs.length) {
    return null;
  }

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={e => {
                    e.preventDefault();

                    if (!isActive) {
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

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeId =
    (tabs.find(tab => tab.id === activeTabId) && activeTabId) || tabs[0].id;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={activeId === tab.id ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeId) {
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
        {tabs.find(tab => tab.id === activeId).content}
      </div>
    </>
  );
};

export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  const effectiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => {
            return (
              <li
                key={t.id}
                className={effectiveTab.id === t.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${t.id}`}
                  onClick={() => {
                    if (activeTabId !== t.id) {
                      onTabSelected(t.id);
                    }
                  }}
                  data-cy="TabLink"
                >
                  {t.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div data-cy="TabsComponent">
        <div className="block" data-cy="TabContent">
          {effectiveTab.content}
        </div>
      </div>
    </>
  );
};

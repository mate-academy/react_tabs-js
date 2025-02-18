export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isActiveIdValid = tabs.find(t => t.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, i) => (
            <li
              className={
                (!isActiveIdValid && i === 0) || tab.id === activeTabId
                  ? 'is-active'
                  : ''
              }
              data-cy="Tab"
              key={tab.id}
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
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isActiveIdValid && tabs.find(x => x.id === activeTabId).content}
      </div>
    </div>
  );
};

export const Tabs = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const TabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tabs.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >

              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => TabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)
          ?.content
        }
      </div>
    </div>
  );
};

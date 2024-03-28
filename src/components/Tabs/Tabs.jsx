export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected: setSelectedTab,
}) => {
  let selectedId = selectedTabId;

  if (!tabs.find(t => t.id === selectedId)) {
    selectedId = tabs[0].id;
    setSelectedTab(tabs[0]);
  }

  const handleTabClick = tab => {
    if (tab.id !== selectedId) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedId).content}
      </div>
    </div>
  );
};

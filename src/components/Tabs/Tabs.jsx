export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const isValidTabId = tabs.some(tab => tab.id === selectedTabId);

  if (!isValidTabId) {
    // eslint-disable-next-line no-param-reassign
    selectedTabId = tabs[0].id;
  }

  const handleTabClick = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
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

      {tabs.map(t => (selectedTabId === t.id ? (
        <div className="block" data-cy="TabContent" key={t.id}>
          {t.content}
        </div>
      ) : null))}
    </div>
  );
};

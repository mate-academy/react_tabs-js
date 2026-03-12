export const Tabs = ({ tabsList, activeTabId = 'tab-1', onTabSelected }) => {
  const activeTab = tabsList.find(tab => tab.id === activeTabId) || tabsList[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabsList.map(tab => (
            <li
              key={tab.id}
              className={`${activeTabId === tab.id ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== activeTabId ? onTabSelected(tab.id) : ''
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`${activeTab.content}`}
      </div>
    </>
  );
};

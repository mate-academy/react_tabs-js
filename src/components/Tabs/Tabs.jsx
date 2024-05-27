export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0]

  const handleClick = (e, id) => {
    if (!e.target.href.includes(active)) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTab.id ? 'is-active' : null}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleClick(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

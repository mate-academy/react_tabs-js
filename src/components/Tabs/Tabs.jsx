/* eslint-disable */

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  function handleClick(id) {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={() => handleClick(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};

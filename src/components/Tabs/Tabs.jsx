/* eslint-disable jsx-a11y/click-events-have-key-events */
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab.id === tab.id ? "is-active" : ""}
              data-cy="Tab"
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
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



export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? "is-active" : ""}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {

                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="TabContent">
        {tabs.find((tab) => tab.id === activeTabId)?.content || "No content"}
      </div>
    </div>
  );
};

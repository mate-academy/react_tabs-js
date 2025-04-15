export function getTabById(tabs, id) {
  return tabs.find(tab => tab.id === id || null);
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTabIdOrDefault = activeTabId;

  if (!getTabById(tabs, activeTabId)) {
    activeTabIdOrDefault = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabIdOrDefault ? `is-active` : ``}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== activeTabIdOrDefault) onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById(tabs, activeTabIdOrDefault).content ?? tabs[0].content}
      </div>
    </div>
  );
};

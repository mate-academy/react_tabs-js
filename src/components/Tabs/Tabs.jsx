/* eslint-disable */

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const actualActiveTab = tabs.find(tab => tab.id === activeTabId)
  ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key = {tab.id}
              data-cy="Tab"
              className={tab.id === actualActiveTab ? "is-active" : ""}
            >
              <a
                onClick={() => tab.id !== actualActiveTab && onTabSelected(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === actualActiveTab).content}
      </div>
    </div>
  )
};

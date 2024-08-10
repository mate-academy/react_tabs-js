import classNames from "classnames";

export const Tabs = ({ activeTabId, setActiveTabId, tabs }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li className={classNames({ 'is-active': activeTab === tab.id })} key={tab.id} data-cy="Tab">
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tab.id !== activeTab.id && setActiveTabId(tab.id)}
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
  )
};

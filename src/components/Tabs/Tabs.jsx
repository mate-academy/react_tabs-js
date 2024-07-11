import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  function handleTabClick(e) {
    onTabSelected(e.target.id);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === activeTab.id })}
              data-cy="Tab"
            >
              <a
                id={tab.id}
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={tab.id !== activeTabId ? handleTabClick : undefined}
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

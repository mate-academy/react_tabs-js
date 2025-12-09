import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  let activeTab = tabs.find(x => x.id === activeTabId);
  let activeId = activeTabId;

  if (!tabs || tabs.length) {
    return null;
  }

  if (!activeTab) {
    [activeTab] = tabs;
    activeId = activeTab.id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': activeId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => activeId !== tab.id && onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content ?? ''}
      </div>
    </div>
  );
};

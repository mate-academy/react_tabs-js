import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => activeTabId === tab.id) || tabs[0];
  const { content } = tabs.find(tab => tab.id === currentTab.id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': currentTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() =>
                  currentTab.id !== tab.id ? onTabSelected(tab.id) : ''
                }
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
        {content}
      </div>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              key={el.id}
              className={cn({ 'is-active': selectedTab.id === el.id })}
              data-cy="Tab"
            >
              <a
                href={`#${el.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTabId !== el.id) {
                    onTabSelected(el.id);
                  }
                }}
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

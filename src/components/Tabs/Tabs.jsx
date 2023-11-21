import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => (

            <li
              key={id}
              className={cn({ 'is-active': selectedTab.id === id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== id) {
                    onTabSelected({ id, title, content });
                  }
                }}
              >
                {title}
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

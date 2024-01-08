import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const { id, title } = tab;

          return (
            <>
              <li
                key={id}
                className={cn({ 'is-active': selectedTab.id === id })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    selectedTab.id === tab.id || onTabSelected(tab)
                  )}
                >
                  {title}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);

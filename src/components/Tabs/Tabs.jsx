import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': selectedTab.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() =>
                    selectedTab.id !== tab.id && onTabSelected(tab)
                  }
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => tab.id === selectedTab.id && tab.content)}
      </div>
    </div>
  );
};

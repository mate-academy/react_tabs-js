import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = selectedTab.id === tab.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => !isSelected && onTabSelected(tab)}
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
        {selectedTab.content}
      </div>
    </div>
  );
};

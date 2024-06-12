import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelectedTab = selectedTab.id === id;

            return (
              <li
                key={id}
                className={cn({ 'is-active': isSelectedTab })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isSelectedTab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
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

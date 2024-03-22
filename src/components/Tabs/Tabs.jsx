import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => {
            const isSelected = id === selectedTab.id;

            return (
              <li
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
                key={id}
              >
                <a
                  onClick={() => {
                    if (!isSelected) {
                      onTabSelected({ id, title, content });
                    }
                  }}
                  href={`#${id}`}
                  data-cy="TabLink"
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

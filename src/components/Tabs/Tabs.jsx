import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              className={cn({ 'is-active': selectedTab.title === title })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab !== tab) {
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

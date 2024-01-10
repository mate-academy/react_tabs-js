import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const { id, title } = tab;

          return (
            <li
              className={classNames({ 'is-active': id === selectedTab.id })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => id !== selectedTab.id && onTabSelected(tab)}
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

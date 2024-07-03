import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(({ id, title }) => {
        const isActive = activeTab.id === id;

        return (
          <li className={cn({ 'is-active': isActive })} data-cy="Tab" key={id}>
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => !isActive && onTabSelected(id)}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

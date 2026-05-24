import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => {
                event.preventDefault();
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={cn({ 'is-active': activeTabId === tab.id })}
        data-cy="Tab"
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={event => {
            event.preventDefault();
            if (tab.id !== activeTabId) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);

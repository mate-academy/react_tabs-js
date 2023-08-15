import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={cn({ 'is-active': tab.id === selectedTabId })}
      >
        <a
          onClick={(event) => {
            event.preventDefault();
            onTabSelected(tab.id);
          }
    }
          href={`#${tab.id}`}
          data-cy="TabLink"
        >
          {tab.title}

        </a>
      </li>
    ))}
  </ul>
);

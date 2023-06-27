import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={cn({
          'is-active': selectedTabId.id === tab.id,
        })}
        data-cy="Tab"
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);

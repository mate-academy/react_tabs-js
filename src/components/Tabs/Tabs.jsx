import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={classNames(
          {
            'is-active': selectedTabId === tab.id,
          },
        )}
        data-cy="Tab"
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => onTabSelected(tab.id)}
        >
          {tab.title}
        </a>
      </li>
    ))
    }
  </ul>
);

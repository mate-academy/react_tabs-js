import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul>
    {tabs.map((tab) => {
      const { id, title } = tab;

      return (
        <li
          className={classNames(
            {
              'is-active': selectedTabId === id,
            },
          )}
          data-cy="Tab"
          key={id}
        >
          <a
            data-cy="TabLink"
            href={`#${id}`}
            onClick={() => onTabSelected(id)}
          >
            {title}
          </a>
        </li>
      );
    })}
  </ul>
);

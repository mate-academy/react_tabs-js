import cn from 'classnames';

export const Tabs = ({ selectedTabId, setselectedTabId, tabs }) => {
  // eslint-disable-next-line no-console
  console.log(tabs);

  return (
    <ul>
      {tabs.map(({ id, title }) => {
        const isActive = id === selectedTabId;

        return (
          <li
            key={id}
            className={cn({ 'is-active': isActive })}
            data-cy="Tab"
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => {
                setselectedTabId(id);
              }}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

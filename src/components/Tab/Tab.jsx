import classNames from 'classnames';

export const Tab = ({ tab: { id, title }, activeTabId, onTabSelected }) => {
  return (
    <li
      className={classNames({ 'is-active': id === activeTabId })}
      data-cy="Tab"
    >
      <a
        href={`#${id}`}
        data-cy="TabLink"
        onClick={() => {
          if (id !== activeTabId) {
            onTabSelected(id);
          }
        }}
      >
        {title}
      </a>
    </li>
  );
};

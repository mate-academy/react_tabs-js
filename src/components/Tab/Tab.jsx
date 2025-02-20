import classNames from 'classnames';

export const Tab = ({ tab, activeTabId, onTabSelected }) => {
  return (
    <li
      className={classNames({ 'is-active': activeTabId === tab.id })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        onClick={() => {
          if (activeTabId !== tab.id) {
            onTabSelected(tab.id);
          }
        }}
        data-cy="TabLink"
      >
        {tab.title}
      </a>
    </li>
  );
};

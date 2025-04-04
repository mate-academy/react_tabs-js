import classNames from 'classnames';

export const Tab = ({
  tab: { id, title },
  activeTab,
  activeTabId,
  onTabSelected,
}) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': activeTab.id === id })}
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

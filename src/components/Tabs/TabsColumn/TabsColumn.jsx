import classNames from 'classnames';

export const TabsColumn = ({ tab, activeTab, onTabSelected }) => {
  const isCurrentTabActive = activeTab.id === tab.id;

  return (
    <li
      className={classNames({ 'is-active': isCurrentTabActive })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (!isCurrentTabActive) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};

import classNames from 'classnames';

export const TabsColumn = ({ tab, activeTab, onTabSelected }) => {
  return (
    <li
      className={classNames({ 'is-active': activeTab.id === tab.id })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== activeTab.id) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};

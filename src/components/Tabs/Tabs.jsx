import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          // className="is-active"
          className={classNames({ 'is-active': tab.id === activeTabId })}
          data-cy="Tab"
        >
          <a
            onClick={() => {
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
      ;
    </ul>
  );
};

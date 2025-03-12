import classNames from 'classnames';

export const Tabs = ({ tabs, setActiveContent, activeTabId, onTabSelected }) => {
  return (
    <ul className="tabs is-boxed">
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={classNames({ 'is-active': activeTabId === tab.id })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              onTabSelected(tab.id);
              setActiveContent(tab.content);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

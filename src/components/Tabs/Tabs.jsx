import classNames from 'classnames';

export const Tabs = ({ tabs, setActiveTabId, activeTabId }) => {
  return (
    <ul className="tabs is-boxed">
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          onClick={() => setActiveTabId(tab.title)}
          key={tab.id}
          className={classNames({'is-active': activeTabId === tab.title})}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

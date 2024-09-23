import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tab = tabs.find(item => item.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            return (
              <li
                key={item.id}
                className={classNames({ 'is-active': tab.id === item.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${item.id}`}
                  data-cy="TabLink"
                  onClick={() => item.id !== tab.id && onTabSelected(item.id)}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.content}
      </div>
    </>
  );
};

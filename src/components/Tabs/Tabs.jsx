import classNames from 'classnames';

export const Tabs = ({ tabs, setTab, tab }) => {
  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tabItem => (
              <li
                className={classNames({ 'is-active': tab.id === tabItem.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tabItem.id}`}
                  data-cy="TabLink"
                  onClick={() => setTab(tabItem)}
                >
                  {tabItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tab.content}
        </div>
      </div>
    </>
  );
};

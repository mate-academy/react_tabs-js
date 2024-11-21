import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId = tabs[0].id, onTabSelected }) => {
  const tab = tabs.find(tabFromArr => tabFromArr.id === activeTabId) || tabs[0];

  function currentTab(idfromTab) {
    return idfromTab !== tab.id && onTabSelected(idfromTab);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            const { id, title } = item;

            return (
              <li
                className={classNames({ 'is-active': tab.id === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    currentTab(id);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.content}
      </div>
    </div>
  );
};

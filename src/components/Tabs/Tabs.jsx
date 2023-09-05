import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (

  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const isActive = classNames({
            'is-active': selectedTab === tab,
          });

          function onClickHandler() {
            return selectedTab !== tab && onTabSelected(tab);
          }

          return (
            <li className={isActive} data-cy="Tab" key={tab.id}>
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={onClickHandler}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);

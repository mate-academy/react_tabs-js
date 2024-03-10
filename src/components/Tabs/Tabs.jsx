import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            return (
              <li
                className={classNames({ 'is-active': selectedTab === item })}
                data-cy="Tab"
              >
                <a
                  href={`#${item.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTab !== item) {
                      setSelectedTab(item);
                    }
                  }}
                >
                  {item.title}
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
};

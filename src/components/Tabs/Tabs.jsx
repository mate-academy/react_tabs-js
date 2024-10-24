import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  let activeTabIdChecked = activeTabId;
  const findId = tabs.find(tab => tab.id === activeTabIdChecked);

  if (findId === undefined) {
    activeTabIdChecked = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames('', {
                  'is-active': activeTabIdChecked === tab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeTabIdChecked !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(item => item.id === activeTabIdChecked).content}
      </div>
    </div>
  );
};

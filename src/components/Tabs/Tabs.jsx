import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  const onClickHandler = idParam => {
    if (activeTabId !== idParam) {
      onTabSelected(idParam);
    }
  };

  const formatedId = activeTab.id.split('-')[1] ?? 1;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': tab.id === activeTab.id })}
                data-cy="Tab"
              >
                <a
                  onClick={() => onClickHandler(tab.id)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Some text {formatedId}
      </div>
    </div>
  );
};

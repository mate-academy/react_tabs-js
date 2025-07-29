import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected, activeTab }) => {
  const isTabIdValid = tabs.some(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const isActive = isTabIdValid
              ? tab.id === activeTabId
              : index === 0;

            return (
              <li
                className={classNames({ 'is-active': isActive })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
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
        {activeTab.content}
      </div>
    </div>
  );
};

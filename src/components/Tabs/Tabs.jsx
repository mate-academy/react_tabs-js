import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTabId, getTabById }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={cn({ 'is-active': tab.id === activeTabId })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      setActiveTabId(tab.id);
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById(activeTabId).content}
      </div>
    </div>
  );
};

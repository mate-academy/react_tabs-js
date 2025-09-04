import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <>
      <h1 className="title">{`Selected tab is ${
        (tabs.find(t => t.id === activeTabId) || tabs[0]).title
      }`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({ 'is-active': activeTabId === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeTabId) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {(tabs.find(t => t.id === activeTabId) || tabs[0]).title}
        </div>
      </div>
    </>
  );
};

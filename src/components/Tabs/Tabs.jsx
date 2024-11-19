/* eslint-disable */
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': activeTab.id === tab.id,
                })}
                onClick={() => {
                  if (activeTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                <a data-cy="TabLink" href={`#${tab.id}`}>
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};

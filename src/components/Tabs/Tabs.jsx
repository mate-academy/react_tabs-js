import classNames from 'classnames';

export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
}) => {

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames({ 'is-active': activeTabId === tab.id })}
                data-cy="Tab"
                onClick={() => {
                  onTabSelected(tab.id);
                }}
                key={tab.id}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => (tab.id === activeTabId)).content}
      </div>
    </div>
  );
};

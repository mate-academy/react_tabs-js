import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const tabSelected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const tabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabSelected.id === tab.id })}
            >
              <a
                onClick={() => tabClick(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabSelected.content}
      </div>
    </div>
  );
};

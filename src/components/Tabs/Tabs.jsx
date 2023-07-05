import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const findTab = tabs.find(item => item.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              key={item.id}
              className={classNames({ 'is-active': findTab.id === item.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (item.id !== selectedTabId) {
                    onTabSelected(item);
                  }
                }}
                href={`#${item.id}`}
                data-cy="TabLink"
              >
                {item.title}

              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findTab.content}
      </div>
    </div>
  );
};

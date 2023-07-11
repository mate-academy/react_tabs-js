import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectTab,
  setCurrentTab,
}) => {
  const visibleTab = tabs.find(tab => tab.id === selectTab) || tabs[0];

  const getVisibleTab = (tab) => {
    if (tab.id !== selectTab) {
      setCurrentTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === visibleTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => getVisibleTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleTab.content}
      </div>
    </div>
  );
};

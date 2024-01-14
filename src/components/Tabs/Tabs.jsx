import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, currentTab }) => {
  const clickEventSetCurrentTab = (clickedTab) => {
    if (currentTab.id !== clickedTab.id) {
      onTabSelected(clickedTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isCurrentTabSelected = tab.id === currentTab.id;

            return (
              <li
                className={classNames({ 'is-active': isCurrentTabSelected })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => clickEventSetCurrentTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

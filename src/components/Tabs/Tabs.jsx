import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  function clickTab(tabAct) {
    if (tabAct !== selectedTab) {
      onTabSelected(tabAct);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab === tab })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => clickTab(tab)}
              >
                {tab.title}
              </a>
            </li>

          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

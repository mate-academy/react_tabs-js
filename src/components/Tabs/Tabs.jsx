import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId = tabs[0].id,
  onTabSelected,
}) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  function onClickHandler(tab) {
    if (tab.id !== activeTab.id) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
              tabs.map((tab, i) => (
                <li
                  className={
                    cn({ 'is-active': tab.id === activeTab.id })
                  }
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => onClickHandler(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

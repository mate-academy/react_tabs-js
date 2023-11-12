import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setTabOn,
}) => {
  const newSelectedTab = tabs.find(tab => tab.id === selectedTabId || tab[0]);
  const chengeTab = (tab) => {
    if (tab.id !== selectedTabId) {
      setTabOn(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === newSelectedTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => chengeTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {newSelectedTab.content}
      </div>
    </div>
  );
};

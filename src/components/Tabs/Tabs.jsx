import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabsId, select }) => {
  const selectTab = tabs.find(tab => tab.id === selectedTabsId || tab[0]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === selectTab.id })}
              data-cy="Tab"
              key={tab.id}
              // id={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => select(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab.content}
      </div>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const setOnClick = tab => tab.id !== activeTab.id && setActiveTab(tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {[...tabs].map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === activeTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => setOnClick(tab)}
                data-cy="TabLink"
              >
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
  );
};

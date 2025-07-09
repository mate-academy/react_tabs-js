import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const tabsContent = tabs.find(el => el.title === activeTab) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': activeTab === tab.title })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    setActiveTab(tab.title);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabsContent.content}
      </div>
    </div>
  );
};

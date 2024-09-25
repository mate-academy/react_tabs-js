import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTab }) => {
  const validTab = tabs.find(tab => tab.id === activeTab) || tabs[0];
  const tabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': validTab.id === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};

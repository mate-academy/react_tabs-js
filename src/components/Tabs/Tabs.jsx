import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const { content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={cn({
                  'is-active': selectedTab === tab,
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() =>
                    tab.id !== selectedTab.id ? onTabSelected(tab) : null
                  }
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              data-cy="Tab"
              key={item.id}
              className={cn({ 'is-active': selectedTab.id === item.id })}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab.id !== item.id) {
                    onTabSelected(item);
                  }
                }}
              >
                {item.title}
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

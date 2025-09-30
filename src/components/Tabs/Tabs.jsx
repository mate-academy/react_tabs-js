import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const curentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  function idDetector(curentClick) {
    if (curentClick === curentTab.id) {
      return;
    }

    onTabSelected(curentClick);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === curentTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => idDetector(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {curentTab.content}
      </div>
    </div>
  );
};

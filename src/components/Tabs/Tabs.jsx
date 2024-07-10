import '@fortawesome/fontawesome-free/css/all.css';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const activeSelected = element => {
    if (element.id !== activeTabId) {
      onTabSelected(element.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              className={cn({ 'is-active': element.id === selectedTab.id })}
              data-cy="Tab"
              key={element.id}
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                id={element.id}
                onClick={() => {
                  activeSelected(element);
                }}
              >
                {element.title}
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

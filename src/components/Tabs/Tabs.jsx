import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({
              'is-active': tab.id === selectedTabId,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);

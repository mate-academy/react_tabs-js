import cn from 'classnames';

function conditionCheck(tabId, hookId) {
  return tabId === hookId;
}

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            className={cn({
              'is-active': conditionCheck(id, selectedTabId),
            })}
            data-cy="Tab"
            key={id}
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => {
                if (!conditionCheck(id, selectedTabId)) {
                  onTabSelected(id);
                }
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {tabs.find(tab => conditionCheck(tab.id, selectedTabId)).content}
    </div>
  </div>
);

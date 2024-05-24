/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs.find(tab => tab.id === activeTabId)) {
    // eslint-disable-next-line no-param-reassign
    activeTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={tab.id}
              className={cn({ 'is-active': activeTabId === tab.id })}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== activeTabId) {
                  return onTabSelected(tab.id);
                }

                return false;
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId).content}
      </div>
    </div>
  );
};

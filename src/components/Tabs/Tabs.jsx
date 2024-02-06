/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';

// eslint-disable-next-line max-len
const checkIfTabExists = (list, Id) => list.filter(tab => tab.id === Id).length > 0;

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTabID = checkIfTabExists(tabs, selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const tabContent = tabs.find(tab => tab.id === selectedTabID).content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTabID })}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== selectedTabID) {
                  onTabSelected(tab);
                }
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
        {tabContent}
      </div>
    </div>
  );
};

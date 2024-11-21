import cn from 'classnames';

const getContentTab = (tabs, correctTabId) =>
  tabs.find(tab => correctTabId === tab.id).content;

const getCorrectTabId = (tabs, selectedTabId) =>
  tabs.some(tab => selectedTabId === tab.id) ? selectedTabId : tabs[0].id;

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const correctTabId = getCorrectTabId(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': correctTabId === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => correctTabId !== tab.id && onTabSelected(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getContentTab(tabs, correctTabId)}
      </div>
    </div>
  );
};

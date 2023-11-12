import cn from 'classnames';

function getTabContent(tabs, selectedTabId) {
  return tabs.find(tab => tab.id === selectedTabId)?.content
    ?? tabs.find((tab, index) => index === 0).content;
}

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index, arr) => (
          <li
            className={cn(arr.find(tabb => tabb.id === selectedTabId)
              ? { 'is-active': selectedTabId === tab.id }
              : { 'is-active': index === 0 })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => (
                selectedTabId !== tab.id && onTabSelected(tab)
              )}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {getTabContent(tabs, selectedTabId)}
    </div>
  </>
);

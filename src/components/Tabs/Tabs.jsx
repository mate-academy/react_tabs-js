import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const isIdValid = tabs?.some(tab => tab.id === activeTabId);
  const currentId = isIdValid ? activeTabId : tabs[0]?.id || '';
  const activeTab = tabs?.find(tab => tab.id === currentId);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': tab.id === currentId })}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => tab.id !== currentId && onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </>
  );
};

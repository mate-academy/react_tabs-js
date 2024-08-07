import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeContent = '';
  const isIdValid = tabs.some(item => item.id === activeTabId);

  const preparedTabs = tabs.map((tab, index) => {
    const isTabActive = tab.id === activeTabId;

    if (isTabActive) {
      activeContent = tab.content;
    }

    return (
      <li
        className={cn({
          'is-active': isTabActive || (!isIdValid && index === 0),
        })}
        data-cy="Tab"
        key={tab.id}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={!isTabActive ? () => onTabSelected(tab.id) : null}
        >
          {tab.title}
        </a>
      </li>
    );
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{preparedTabs}</ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent}
      </div>
    </div>
  );
};

import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeContent = '';
  const isIdValid = tabs.some(item => item.id === activeTabId);

  const preparedTabs = tabs.map((tab, index) => {
    const { id, content, title } = tab;
    const isTabActive = id === activeTabId;

    if (isTabActive) {
      activeContent = content;
    }

    return (
      <li
        className={cn({
          'is-active': isTabActive || (!isIdValid && index === 0),
        })}
        data-cy="Tab"
        key={id}
      >
        <a
          href={`#${id}`}
          data-cy="TabLink"
          onClick={!isTabActive ? () => onTabSelected(id) : null}
        >
          {title}
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

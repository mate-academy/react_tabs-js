import cn from 'classnames';

export const Tabs = ({
  tabs,
  currentTabId,
  setCurrentTabId,
  setCurrentTabText,
}) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn('', {
            'is-active': currentTabId === tab.id,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            onClick={e => {
              e.preventDefault();
              setCurrentTabId(tab.id);
              setCurrentTabText(tab.content);
            }}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;

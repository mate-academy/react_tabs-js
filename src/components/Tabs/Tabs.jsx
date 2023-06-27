import cn from 'classnames';

export const Tabs = (Props) => {
  const { tabId, tabTitle, activeId, setId } = Props;

  return (
    <li
      className={cn({
        'is-active': tabId === activeId,
      })}
      data-cy="Tab"
    >
      <a
        href={`#${tabId}`}
        data-cy="TabLink"
        onClick={() => setId(tabId)}
      >
        {tabTitle}
      </a>
    </li>
  );
};

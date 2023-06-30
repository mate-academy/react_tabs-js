import cn from 'classnames';

export const Tabs = ({
  tab,
  selectedTabId,
  setSelectedTabId,
}) => (
  <li
    data-cy="Tab"
    className={cn({ 'is-active': selectedTabId === tab.id })}
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => setSelectedTabId(tab.id)}
    >
      {tab.title}
    </a>
  </li>
);

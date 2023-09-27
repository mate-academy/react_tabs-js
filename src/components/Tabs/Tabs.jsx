import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
}) => (
  <ul>
    {tabs.map(tab => (
      <li
        className={cn({ 'is-active': selectedTabId === tab })}
        data-cy="Tab"
        key={tab.id}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => setSelectedTabId(tab)}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
